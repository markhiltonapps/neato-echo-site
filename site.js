/* Neato Echo site — release links, changelog, and small interactions */
(function () {
  "use strict";

  var REPO = "markhiltonapps/neato-echo";
  var API = "https://api.github.com/repos/" + REPO + "/releases";
  var RELEASES_PAGE = "https://github.com/" + REPO + "/releases";

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var mobile = document.querySelector(".nav-mobile");
  if (toggle && mobile) {
    toggle.addEventListener("click", function () {
      var open = mobile.getAttribute("data-open") === "true";
      mobile.setAttribute("data-open", open ? "false" : "true");
      toggle.setAttribute("aria-expanded", open ? "false" : "true");
    });
    mobile.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        mobile.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---------- reveal on first view ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    reveals.forEach(function (el) {
      io.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---------- screenshot frames: show the empty state when an image is missing ---------- */
  document.querySelectorAll(".crt img").forEach(function (img) {
    var frame = img.closest(".crt");
    var markEmpty = function () {
      frame.classList.add("is-empty");
    };
    if (img.complete && img.naturalWidth === 0) markEmpty();
    img.addEventListener("error", markEmpty);
  });

  /* ---------- releases ---------- */
  function pickInstaller(release) {
    if (!release || !release.assets) return null;
    var exe = release.assets.filter(function (a) {
      return /\.exe$/i.test(a.name) && !/blockmap/i.test(a.name);
    });
    var setup = exe.filter(function (a) {
      return /setup/i.test(a.name);
    });
    return setup[0] || exe[0] || null;
  }

  function formatSize(bytes) {
    if (!bytes) return "";
    var mb = bytes / (1024 * 1024);
    return mb >= 1024 ? (mb / 1024).toFixed(1) + " GB" : Math.round(mb) + " MB";
  }

  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (e) {
      return iso;
    }
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* A deliberately small markdown subset for release notes: headings,
     bullets, paragraphs, inline code, bold, and links. */
  function renderNotes(markdown) {
    if (!markdown) return "<p>No notes for this release.</p>";
    var lines = markdown.replace(/\r/g, "").split("\n");
    var html = "";
    var inList = false;
    var closeList = function () {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
    };
    var inline = function (text) {
      var safe = escapeHtml(text);
      safe = safe.replace(/`([^`]+)`/g, "<code>$1</code>");
      safe = safe.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
      safe = safe.replace(
        /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
        '<a href="$2" rel="noopener" target="_blank">$1</a>'
      );
      safe = safe.replace(/(^|\s)(https:\/\/github\.com\/[^\s<]+)/g, function (m, pre, url) {
        return pre + '<a href="' + url + '" rel="noopener" target="_blank">' + url + "</a>";
      });
      return safe;
    };
    lines.forEach(function (raw) {
      var line = raw.trim();
      if (!line) {
        closeList();
        return;
      }
      var heading = line.match(/^#{1,6}\s+(.*)$/);
      if (heading) {
        closeList();
        html += "<h4>" + inline(heading[1]) + "</h4>";
        return;
      }
      var bullet = line.match(/^[-*]\s+(.*)$/);
      if (bullet) {
        if (!inList) {
          html += "<ul>";
          inList = true;
        }
        html += "<li>" + inline(bullet[1]) + "</li>";
        return;
      }
      closeList();
      html += "<p>" + inline(line) + "</p>";
    });
    closeList();
    return html;
  }

  function renderRelease(release) {
    var installer = pickInstaller(release);
    var name = release.name || release.tag_name;
    var actions = "";
    if (installer) {
      actions +=
        '<a class="btn btn-retro" href="' +
        installer.browser_download_url +
        '">Download ' +
        escapeHtml(release.tag_name) +
        (installer.size ? " · " + formatSize(installer.size) : "") +
        "</a>";
    }
    actions +=
      '<a class="btn btn-outline btn-sm" href="' +
      release.html_url +
      '" rel="noopener" target="_blank">View on GitHub</a>';
    return (
      '<article class="release googie-card">' +
      '<div class="release-head"><h3>' +
      escapeHtml(name) +
      '</h3><time class="mono" datetime="' +
      escapeHtml(release.published_at || "") +
      '">' +
      escapeHtml(formatDate(release.published_at)) +
      "</time>" +
      (release.prerelease ? '<span class="stamp">Pre-release</span>' : "") +
      "</div>" +
      '<div class="release-body">' +
      renderNotes(release.body) +
      "</div>" +
      '<div class="release-actions">' +
      actions +
      "</div>" +
      "</article>"
    );
  }

  function wireDownloadButtons(release) {
    var installer = pickInstaller(release);
    document.querySelectorAll("[data-download]").forEach(function (btn) {
      if (installer) {
        btn.setAttribute("href", installer.browser_download_url);
        var label = btn.querySelector("[data-download-label]");
        if (label) label.textContent = "Download for Windows";
        var meta = btn.querySelector("[data-download-meta]");
        if (meta) {
          meta.textContent =
            release.tag_name + (installer.size ? " · " + formatSize(installer.size) : "");
        }
      } else {
        btn.setAttribute("href", RELEASES_PAGE);
      }
    });
    document.querySelectorAll("[data-version]").forEach(function (el) {
      el.textContent = release.tag_name;
    });
  }

  function loadReleases() {
    var list = document.querySelector("[data-releases]");
    var status = document.querySelector("[data-release-status]");
    var limit = list ? parseInt(list.getAttribute("data-limit") || "0", 10) : 0;
    fetch(API + "?per_page=30", { headers: { Accept: "application/vnd.github+json" } })
      .then(function (res) {
        if (!res.ok) throw new Error("GitHub responded " + res.status);
        return res.json();
      })
      .then(function (releases) {
        var published = releases.filter(function (r) {
          return !r.draft;
        });
        if (!published.length) {
          if (status) status.textContent = "No builds have been published yet. Check back soon.";
          return;
        }
        var latest =
          published.filter(function (r) {
            return !r.prerelease;
          })[0] || published[0];
        wireDownloadButtons(latest);
        if (list) {
          var shown = limit > 0 ? published.slice(0, limit) : published;
          list.innerHTML = shown.map(renderRelease).join("");
          if (status) status.textContent = "";
        }
      })
      .catch(function (err) {
        if (status) {
          status.innerHTML =
            'Could not load release notes right now. <a href="' +
            RELEASES_PAGE +
            '" rel="noopener" target="_blank">Open the releases page on GitHub</a>.';
        }
        document.querySelectorAll("[data-download]").forEach(function (btn) {
          btn.setAttribute("href", RELEASES_PAGE);
        });
        if (window.console) console.warn("releases:", err.message);
      });
  }

  loadReleases();

  /* ---------- footer year ---------- */
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
