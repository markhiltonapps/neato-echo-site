/*
 * Neato Echo docs builder.
 *
 * Reads Markdown pages from docs-src/ (Mintlify-flavored: <Steps>, <Note>,
 * <Accordion>, <Card>, <Tabs> …), renders them into docs/**.html with the site
 * layout, and writes docs/search-index.json for the sidebar search.
 *
 *   npm run build:docs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SRC = join(ROOT, "docs-src");
const OUT = join(ROOT, "docs");
const SITE_URL = "https://echo.neatoventures.com";

/* ------------------------------------------------------------------ */
/* Navigation: order and grouping of every page in the manual.         */
/* ------------------------------------------------------------------ */
const NAV = [
  {
    group: "Start here",
    pages: ["index", "quickstart", "install-step-by-step", "faq", "help/getting-help"],
  },
  {
    group: "Dictation",
    pages: [
      "guides/dictation",
      "help/dictation/hotkeys",
      "help/dictation/hold-or-tap",
      "help/dictation/choosing-a-shortcut",
      "help/dictation/auto-paste-and-clipboard",
      "help/dictation/cleanup",
      "help/dictation/languages",
      "help/dictation/translation",
      "help/dictation/improve-accuracy",
    ],
  },
  {
    group: "Voice and chat agent",
    pages: [
      "guides/agent-mode",
      "help/agent/voice-modes",
      "help/agent/agent-name",
      "help/agent/voice-agent",
      "help/agent/chat-agent",
    ],
  },
  {
    group: "Meetings",
    pages: [
      "guides/meeting-transcription",
      "help/meetings/record-a-meeting",
      "help/meetings/how-meeting-detection-works",
      "help/meetings/speaker-labels",
      "help/meetings/capture-both-sides",
      "help/meetings/connect-your-calendar",
    ],
  },
  {
    group: "Notes",
    pages: [
      "guides/notes",
      "help/notes/organize-with-folders",
      "help/notes/search-your-notes",
      "help/notes/export-your-notes",
    ],
  },
  {
    group: "Make it yours",
    pages: [
      "guides/custom-dictionary",
      "help/customize/custom-dictionary",
      "help/customize/snippets",
      "help/customize/choose-your-microphone",
      "help/customize/settings-reference",
    ],
  },
  {
    group: "Models and processing",
    pages: ["guides/cloud-vs-local", "guides/local-models"],
  },
  {
    group: "Windows",
    pages: [
      "platform/system-requirements",
      "platform/windows",
      "platform/dictating-into-other-apps",
      "platform/editors-and-terminals",
      "platform/running-in-the-background",
      "platform/where-your-files-live",
      "platform/work-computers",
    ],
  },
  {
    group: "Privacy",
    pages: [
      "help/privacy/where-your-data-goes",
      "help/privacy/what-we-store-and-for-how-long",
      "help/privacy/is-my-data-used-to-train-ai",
      "help/privacy/how-neato-echo-is-secured",
      "help/privacy/gdpr-and-your-data-rights",
      "help/privacy/hipaa-and-healthcare",
      "help/privacy/for-your-it-team",
    ],
  },
  {
    group: "Fix a problem",
    pages: [
      "troubleshooting",
      "help/fix/nothing-was-transcribed",
      "help/fix/microphone-not-working",
      "help/fix/hotkey-not-working",
      "help/fix/text-not-pasting",
      "help/fix/text-pasted-twice",
      "help/fix/wrong-words-or-language",
      "help/fix/it-answers-instead-of-typing",
      "help/fix/recover-a-lost-dictation",
      "help/fix/meeting-audio-not-captured",
      "help/fix/app-wont-open",
      "help/fix/antivirus-blocks-neato-echo",
      "help/fix/updates-and-reinstalling",
      "help/fix/model-download-fails",
      "help/fix/local-transcription-not-working",
    ],
  },
];

/* Old slugs that writers may still link to. */
const SLUG_ALIASES = {
  "help/meetings/connect-google-calendar": "help/meetings/connect-your-calendar",
  "help/notes/organise-with-folders": "help/notes/organize-with-folders",
  "help/customise/custom-dictionary": "help/customize/custom-dictionary",
  "help/customise/snippets": "help/customize/snippets",
  "help/customise/choose-your-microphone": "help/customize/choose-your-microphone",
  "help/customise/settings-reference": "help/customize/settings-reference",
  "help/privacy/how-openwhispr-is-secured": "help/privacy/how-neato-echo-is-secured",
  "help/fix/antivirus-blocks-openwhispr": "help/fix/antivirus-blocks-neato-echo",
  "help/fix/antivirus-blocks-openwhispr": "help/fix/antivirus-blocks-neato-echo",
  "help/getting-help": "help/getting-help",
  "": "index",
};

const ALL_SLUGS = NAV.flatMap((g) => g.pages);
const KNOWN = new Set(ALL_SLUGS);
const warnings = [];

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */
const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const slugify = (text) =>
  String(text)
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (/^(['"]).*\1$/.test(val)) val = val.slice(1, -1);
    data[key] = val;
  }
  return { data, body: raw.slice(m[0].length) };
}

function pageUrl(slug) {
  return slug === "index" ? "/docs/" : `/docs/${slug}.html`;
}

function resolveInternal(href, fromSlug) {
  // "/help/x#y" | "/help/x" | "#y" | "/"
  const [pathPart, hash] = href.split("#");
  if (pathPart === "" && hash !== undefined) return `#${hash}`;
  let slug = pathPart.replace(/^\//, "").replace(/\.html?$/, "").replace(/\/$/, "");
  if (slug in SLUG_ALIASES) slug = SLUG_ALIASES[slug];
  if (!KNOWN.has(slug)) {
    warnings.push(`${fromSlug}: link to missing page ${href}`);
    return null;
  }
  return pageUrl(slug) + (hash ? `#${hash}` : "");
}

/* ------------------------------------------------------------------ */
/* Mintlify components → HTML (before Markdown)                        */
/* ------------------------------------------------------------------ */
const ICONS = {
  note: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg>',
  warning:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 3 19h18L12 4z"/><path d="M12 10v4M12 17h.01"/></svg>',
  tip: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6M10 21h4M8.5 14.5A6 6 0 1 1 15.5 14.5c-.6.6-1 1.4-1 2.5h-5c0-1.1-.4-1.9-1-2.5z"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 6 6 6-6 6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
};

function attr(tag, name) {
  const m = tag.match(new RegExp(`${name}\\s*=\\s*"([^"]*)"`)) || tag.match(new RegExp(`${name}\\s*=\\s*'([^']*)'`));
  return m ? m[1] : "";
}

/**
 * Walks the source line by line. Component tags become HTML lines wrapped in
 * blank lines (so CommonMark treats them as HTML blocks), and the content
 * inside is dedented by two spaces per nesting level.
 */
function transformComponents(body, slug) {
  const lines = body.replace(/\r/g, "").split("\n");
  const out = [];
  const stack = [];
  let stepIndex = 0;
  const push = (html) => {
    out.push("", html, "");
  };

  for (const raw of lines) {
    const depth = stack.length;
    let line = raw;
    // dedent by the nesting depth
    let removed = 0;
    while (removed < depth * 2 && line.startsWith(" ")) {
      line = line.slice(1);
      removed++;
    }
    const trimmed = line.trim();
    const open = trimmed.match(/^<(Steps|Step|Note|Warning|Tip|Info|Check|Accordion|AccordionGroup|Card|CardGroup|Tabs|Tab|Frame)\b([^>]*)>$/);
    const close = trimmed.match(/^<\/(Steps|Step|Note|Warning|Tip|Info|Check|Accordion|AccordionGroup|Card|CardGroup|Tabs|Tab|Frame)>$/);
    const selfClosing = trimmed.match(/^<(Snippet|Icon|Card)\b[^>]*\/>$/);

    if (selfClosing) {
      if (selfClosing[1] === "Card") {
        const title = attr(trimmed, "title");
        const href = attr(trimmed, "href");
        push(cardOpen(title, href, slug) + "</article>");
      }
      continue; // Snippet / Icon dropped
    }

    if (open) {
      const tag = open[1];
      const rest = open[2];
      stack.push(tag);
      switch (tag) {
        case "Steps":
          stepIndex = 0;
          push('<ol class="doc-steps">');
          break;
        case "Step": {
          stepIndex++;
          const title = attr(rest, "title");
          push(`<li class="doc-step"><span class="doc-step-num" aria-hidden="true">${stepIndex}</span><h3 class="doc-step-title">${esc(title)}</h3><div class="doc-step-body">`);
          break;
        }
        case "Note":
        case "Info":
        case "Check":
          push(`<aside class="callout callout-note">${ICONS.note}<div class="callout-body">`);
          break;
        case "Warning":
          push(`<aside class="callout callout-warning">${ICONS.warning}<div class="callout-body">`);
          break;
        case "Tip":
          push(`<aside class="callout callout-tip">${ICONS.tip}<div class="callout-body">`);
          break;
        case "AccordionGroup":
          push('<div class="acc-group">');
          break;
        case "Accordion": {
          const title = attr(rest, "title");
          push(`<details class="acc"><summary>${ICONS.chevron}<span>${esc(title)}</span></summary><div class="acc-body">`);
          break;
        }
        case "CardGroup":
          push('<div class="doc-cards">');
          break;
        case "Card": {
          const title = attr(rest, "title");
          const href = attr(rest, "href");
          push(cardOpen(title, href, slug));
          break;
        }
        case "Tabs":
          push('<div class="doc-tabs" data-tabs>');
          break;
        case "Tab": {
          const title = attr(rest, "title");
          push(`<section class="doc-tab" data-tab="${esc(title)}"><h4 class="doc-tab-label">${esc(title)}</h4><div class="doc-tab-body">`);
          break;
        }
        case "Frame":
          push('<figure class="doc-frame">');
          break;
      }
      continue;
    }

    if (close) {
      const tag = close[1];
      const top = stack.pop();
      if (top !== tag) warnings.push(`${slug}: mismatched </${tag}> (open was ${top})`);
      switch (tag) {
        case "Steps":
          push("</ol>");
          break;
        case "Step":
          push("</div></li>");
          break;
        case "Note":
        case "Info":
        case "Check":
        case "Warning":
        case "Tip":
          push("</div></aside>");
          break;
        case "AccordionGroup":
          push("</div>");
          break;
        case "Accordion":
          push("</div></details>");
          break;
        case "CardGroup":
          push("</div>");
          break;
        case "Card":
          push("</div></article>");
          break;
        case "Tabs":
          push("</div>");
          break;
        case "Tab":
          push("</div></section>");
          break;
        case "Frame":
          push("</figure>");
          break;
      }
      continue;
    }

    out.push(line);
  }
  if (stack.length) warnings.push(`${slug}: unclosed components ${stack.join(", ")}`);
  return out.join("\n");
}

function cardOpen(title, href, slug) {
  let url = href;
  let external = false;
  if (href && /^https?:/.test(href)) external = true;
  else if (href) url = resolveInternal(href, slug);
  const heading = url
    ? `<h3 class="doc-card-title"><a href="${esc(url)}"${external ? ' rel="noopener" target="_blank"' : ""}>${esc(title)}</a>${ICONS.arrow}</h3>`
    : `<h3 class="doc-card-title">${esc(title)}</h3>`;
  return `<article class="doc-card${url ? " is-link" : ""}">${heading}<div class="doc-card-body">`;
}

/* ------------------------------------------------------------------ */
/* Markdown renderer                                                   */
/* ------------------------------------------------------------------ */
function makeRenderer(slug, headings) {
  const renderer = new marked.Renderer();
  const used = new Set();

  renderer.heading = function ({ tokens, depth }) {
    const text = this.parser.parseInline(tokens);
    let id = slugify(text) || `section-${headings.length + 1}`;
    let base = id;
    let n = 2;
    while (used.has(id)) id = `${base}-${n++}`;
    used.add(id);
    if (depth === 2 || depth === 3) headings.push({ id, depth, text: text.replace(/<[^>]+>/g, "") });
    return `<h${depth} id="${id}"><a class="anchor" href="#${id}" aria-label="Link to this section">${text}</a></h${depth}>\n`;
  };

  renderer.link = function ({ href, title, tokens }) {
    const text = this.parser.parseInline(tokens);
    const t = title ? ` title="${esc(title)}"` : "";
    if (/^(https?:|mailto:)/.test(href)) {
      const ext = /^https?:/.test(href) && !href.startsWith(SITE_URL);
      return `<a href="${esc(href)}"${t}${ext ? ' rel="noopener" target="_blank"' : ""}>${text}</a>`;
    }
    if (href.startsWith("/") || href.startsWith("#")) {
      const resolved = resolveInternal(href, slug);
      if (!resolved) return text;
      return `<a href="${esc(resolved)}"${t}>${text}</a>`;
    }
    return `<a href="${esc(href)}"${t}>${text}</a>`;
  };

  renderer.table = function ({ header, rows }) {
    const cell = (c, tag) => {
      const content = this.parser.parseInline(c.tokens);
      const align = c.align ? ` style="text-align:${c.align}"` : "";
      return `<${tag}${align}>${content}</${tag}>`;
    };
    const head = `<thead><tr>${header.map((c) => cell(c, "th")).join("")}</tr></thead>`;
    const body = rows.map((r) => `<tr>${r.map((c) => cell(c, "td")).join("")}</tr>`).join("");
    return `<div class="table-wrap"><table>${head}<tbody>${body}</tbody></table></div>\n`;
  };

  renderer.code = function ({ text, lang }) {
    const cls = lang ? ` class="language-${esc(lang)}"` : "";
    return `<pre><code${cls}>${esc(text)}</code></pre>\n`;
  };

  return renderer;
}

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */
function siteHeader() {
  return `
    <header class="nav">
      <div class="container">
        <a class="wordmark" href="/" aria-label="Neato Echo home">
          <img src="/assets/icon-64.png" alt="" width="64" height="64" />
          <span>Neato<span class="orange">_</span>Echo</span>
        </a>
        <ul class="nav-links">
          <li><a href="/#story">How it works</a></li>
          <li><a href="/#privacy">Privacy</a></li>
          <li><a href="/#install">Install</a></li>
          <li><a href="/docs/" aria-current="page">Docs</a></li>
          <li><a href="/changelog.html">Changelog</a></li>
        </ul>
        <div class="nav-actions">
          <a class="btn btn-cta btn-sm" data-download href="https://github.com/markhiltonapps/neato-echo/releases">
            <span data-download-label>Download</span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-mobile" aria-label="Menu">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </div>
      <nav class="nav-mobile" id="nav-mobile" data-open="false" aria-label="Mobile">
        <ul>
          <li><a href="/#story">How it works</a></li>
          <li><a href="/#privacy">Privacy</a></li>
          <li><a href="/#install">Install</a></li>
          <li><a href="/docs/">Docs</a></li>
          <li><a href="/changelog.html">Changelog</a></li>
        </ul>
      </nav>
    </header>`;
}

function siteFooter() {
  return `
    <footer class="footer band-brown bg-starburst">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="wordmark" href="/" style="color: hsl(50 33% 95%)">
              <img src="/assets/icon-64.png" alt="" width="64" height="64" />
              <span>Neato<span class="orange">_</span>Echo</span>
            </a>
            <p class="footer-tag" style="margin-top: 1rem">The future you were promised, on your own PC.</p>
            <p class="muted" style="margin-top: 0.75rem; max-width: 34rem">
              A <a href="https://www.neatoventures.com" rel="noopener">Neato Ventures</a> product,
              built in Houston, TX on the open-source
              <a href="https://github.com/OpenWhispr/openwhispr" rel="noopener">OpenWhispr</a> project (MIT).
            </p>
          </div>
          <div>
            <h3>Product</h3>
            <ul>
              <li><a data-download href="https://github.com/markhiltonapps/neato-echo/releases">Download</a></li>
              <li><a href="/docs/">Documentation</a></li>
              <li><a href="/changelog.html">Changelog</a></li>
              <li><a href="/support.html">Support</a></li>
              <li><a href="/privacy.html">Privacy Policy</a></li>
              <li><a href="/terms.html">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h3>Neato Ventures</h3>
            <ul>
              <li><a href="https://www.neatoventures.com" rel="noopener">neatoventures.com</a></li>
              <li><a href="https://github.com/markhiltonapps/neato-echo" rel="noopener">Source on GitHub</a></li>
              <li><a href="mailto:hello@neatoventures.com">hello@neatoventures.com</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© <span data-year>${new Date().getFullYear()}</span> Neato Ventures. Neato Echo is licensed under MIT.</span>
          <span class="micro">Made with an atom and a microphone</span>
        </div>
      </div>
    </footer>`;
}

function sidebar(currentSlug, pages) {
  const groups = NAV.map((g) => {
    const items = g.pages
      .filter((s) => pages.has(s))
      .map((s) => {
        const p = pages.get(s);
        const current = s === currentSlug ? ' aria-current="page"' : "";
        return `<li><a href="${pageUrl(s)}"${current} data-title="${esc(p.title)}" data-desc="${esc(p.description)}">${esc(p.title)}</a></li>`;
      })
      .join("");
    return `<li class="docs-group"><h3>${esc(g.group)}</h3><ul>${items}</ul></li>`;
  }).join("");
  return `
      <aside class="docs-side" id="docs-side">
        <div class="docs-search">
          <label class="sr-only" for="docs-q">Search the manual</label>
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>
          <input id="docs-q" type="search" placeholder="Search the manual" autocomplete="off" spellcheck="false" />
        </div>
        <nav class="docs-nav" aria-label="Manual">
          <ul>${groups}</ul>
          <p class="docs-nav-empty" hidden>Nothing matches. Try a different word, or <a href="/support.html">ask us</a>.</p>
        </nav>
      </aside>`;
}

function stillNeedHelp() {
  return `
        <section class="doc-help" aria-labelledby="still-need-help">
          <h2 id="still-need-help">Still need help?</h2>
          <p>Write to <a href="mailto:hello@neatoventures.com">hello@neatoventures.com</a> with your Windows version, your Neato Echo version (Settings → System), and what you were doing. A person reads every message.</p>
          <div class="doc-help-actions">
            <a class="btn btn-retro" href="mailto:hello@neatoventures.com">Email support</a>
            <a class="btn btn-outline btn-sm" href="https://github.com/markhiltonapps/neato-echo/issues/new" rel="noopener" target="_blank">Report a bug on GitHub</a>
          </div>
        </section>`;
}

function pager(slug) {
  const i = ALL_SLUGS.indexOf(slug);
  const prev = i > 0 ? ALL_SLUGS[i - 1] : null;
  const next = i < ALL_SLUGS.length - 1 ? ALL_SLUGS[i + 1] : null;
  const link = (s, rel, label) =>
    s && PAGES.has(s)
      ? `<a class="doc-pager-link doc-pager-${rel}" href="${pageUrl(s)}" rel="${rel}"><span class="micro">${label}</span><span class="doc-pager-title">${esc(PAGES.get(s).title)}</span></a>`
      : "<span></span>";
  return `<nav class="doc-pager" aria-label="Previous and next">${link(prev, "prev", "Previous")}${link(next, "next", "Next")}</nav>`;
}

function groupOf(slug) {
  return NAV.find((g) => g.pages.includes(slug))?.group || "";
}

function layout(page, html, headings) {
  const toc =
    headings.filter((h) => h.depth === 2).length >= 2
      ? `<aside class="docs-toc" aria-labelledby="toc-title"><h3 id="toc-title">On this page</h3><ol>${headings
          .map((h) => `<li class="toc-${h.depth}"><a href="#${h.id}">${esc(h.text)}</a></li>`)
          .join("")}</ol></aside>`
      : "";
  const group = groupOf(page.slug);
  const title = page.slug === "index" ? "Neato Echo Manual" : `${page.title} — Neato Echo Manual`;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${esc(title)}</title>
    <meta name="description" content="${esc(page.description)}" />
    <link rel="canonical" href="${SITE_URL}${pageUrl(page.slug)}" />
    <link rel="icon" href="/assets/favicon.ico" sizes="any" />
    <link rel="icon" href="/assets/echo-mark.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/styles.css" />
    <link rel="stylesheet" href="/docs.css" />
  </head>
  <body class="docs">
    <a class="sr-only" href="#main">Skip to content</a>
${siteHeader()}

    <div class="docs-shell container">
      <button class="docs-side-toggle btn btn-outline btn-sm" type="button" aria-expanded="false" aria-controls="docs-side">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h10M4 18h7"/></svg>
        Browse the manual
      </button>
${sidebar(page.slug, PAGES)}

      <main id="main" class="docs-main">
        <article class="doc">
          <header class="doc-head">
            ${group ? `<p class="doc-crumb"><a href="/docs/">Manual</a> <span aria-hidden="true">/</span> ${esc(group)}</p>` : ""}
            <h1>${esc(page.title)}</h1>
            ${page.description ? `<p class="doc-lede">${esc(page.description)}</p>` : ""}
          </header>
          <div class="doc-body">
${html}
          </div>
${pager(page.slug)}
${stillNeedHelp()}
        </article>
      </main>
${toc}
    </div>

${siteFooter()}
    <script src="/site.js" defer></script>
    <script src="/docs.js" defer></script>
  </body>
</html>
`;
}

/* ------------------------------------------------------------------ */
/* Build                                                               */
/* ------------------------------------------------------------------ */
const PAGES = new Map();
for (const slug of ALL_SLUGS) {
  const file = join(SRC, `${slug}.md`);
  if (!existsSync(file)) {
    warnings.push(`missing source: ${slug}.md`);
    continue;
  }
  const { data, body } = parseFrontmatter(readFileSync(file, "utf8"));
  if (!data.title) warnings.push(`${slug}: no title in frontmatter`);
  PAGES.set(slug, {
    slug,
    title: data.title || slug,
    description: data.description || "",
    body,
  });
}

marked.setOptions({ gfm: true, breaks: false });
const searchIndex = [];

for (const page of PAGES.values()) {
  const headings = [];
  const pre = transformComponents(page.body, page.slug);
  const html = marked.parse(pre, { renderer: makeRenderer(page.slug, headings) });
  const outFile = join(OUT, page.slug === "index" ? "index.html" : `${page.slug}.html`);
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, layout(page, html, headings));
  searchIndex.push({
    url: pageUrl(page.slug),
    title: page.title,
    description: page.description,
    group: groupOf(page.slug),
    headings: headings.map((h) => h.text),
  });
}

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "search-index.json"), JSON.stringify(searchIndex));

console.log(`Built ${PAGES.size} pages into docs/`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`);
  for (const w of warnings) console.log(`  - ${w}`);
}
