/* Neato Echo manual — sidebar toggle, search filter, tabs, table of contents */
(function () {
  "use strict";

  /* ---------- mobile sidebar ---------- */
  var shell = document.querySelector(".docs-shell");
  var sideToggle = document.querySelector(".docs-side-toggle");
  if (shell && sideToggle) {
    sideToggle.addEventListener("click", function () {
      var open = shell.classList.toggle("side-open");
      sideToggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        var q = document.getElementById("docs-q");
        if (q) q.focus({ preventScroll: true });
      }
    });
  }

  /* ---------- search: filters the sidebar as you type ---------- */
  var input = document.getElementById("docs-q");
  var nav = document.querySelector(".docs-nav");
  if (input && nav) {
    var groups = Array.prototype.slice.call(nav.querySelectorAll(".docs-group"));
    var empty = nav.querySelector(".docs-nav-empty");
    var items = [];
    groups.forEach(function (group) {
      Array.prototype.slice.call(group.querySelectorAll("li")).forEach(function (li) {
        var a = li.querySelector("a");
        items.push({
          li: li,
          group: group,
          a: a,
          title: a.getAttribute("data-title") || a.textContent,
          hay: ((a.getAttribute("data-title") || "") + " " + (a.getAttribute("data-desc") || "")).toLowerCase(),
        });
      });
    });

    var escapeHtml = function (s) {
      return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };

    var highlight = function (title, terms) {
      var html = escapeHtml(title);
      terms.forEach(function (term) {
        var re = new RegExp("(" + term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "ig");
        html = html.replace(re, "<mark>$1</mark>");
      });
      return html;
    };

    var apply = function () {
      var terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      var shown = 0;
      items.forEach(function (item) {
        var match = terms.every(function (t) {
          return item.hay.indexOf(t) !== -1;
        });
        item.li.hidden = !match;
        item.a.innerHTML = terms.length && match ? highlight(item.title, terms) : escapeHtml(item.title);
        if (match) shown++;
      });
      groups.forEach(function (group) {
        var visible = group.querySelectorAll("li:not([hidden])").length;
        group.hidden = visible === 0;
      });
      if (empty) empty.hidden = shown !== 0;
    };

    input.addEventListener("input", apply);
    input.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        input.value = "";
        apply();
      }
      if (event.key === "Enter") {
        var first = nav.querySelector("li:not([hidden]) a");
        if (first && input.value.trim()) first.click();
      }
    });

    // "/" focuses search from anywhere on the page
    document.addEventListener("keydown", function (event) {
      var tag = (event.target.tagName || "").toLowerCase();
      if (event.key === "/" && tag !== "input" && tag !== "textarea") {
        event.preventDefault();
        if (shell && !shell.classList.contains("side-open") && getComputedStyle(sideToggle).display !== "none") {
          sideToggle.click();
        }
        input.focus();
      }
    });

    // keep the current page in view inside the sidebar
    var current = nav.querySelector('a[aria-current="page"]');
    if (current && current.scrollIntoView) {
      var side = document.getElementById("docs-side");
      if (side && side.scrollHeight > side.clientHeight) {
        current.scrollIntoView({ block: "center" });
      }
    }
  }

  /* ---------- tabs ---------- */
  document.querySelectorAll("[data-tabs]").forEach(function (tabs) {
    var panels = Array.prototype.slice.call(tabs.querySelectorAll(":scope > .doc-tab"));
    if (panels.length < 2) return;
    var list = document.createElement("div");
    list.className = "doc-tab-list";
    list.setAttribute("role", "tablist");
    var select = function (index) {
      panels.forEach(function (panel, i) {
        panel.hidden = i !== index;
        var btn = list.children[i];
        btn.setAttribute("aria-selected", i === index ? "true" : "false");
        btn.tabIndex = i === index ? 0 : -1;
      });
    };
    panels.forEach(function (panel, i) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.setAttribute("role", "tab");
      btn.textContent = panel.getAttribute("data-tab") || "Tab " + (i + 1);
      btn.addEventListener("click", function () {
        select(i);
      });
      btn.addEventListener("keydown", function (event) {
        var delta = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
        if (!delta) return;
        var next = (i + delta + panels.length) % panels.length;
        select(next);
        list.children[next].focus();
      });
      list.appendChild(btn);
      panel.setAttribute("role", "tabpanel");
    });
    tabs.insertBefore(list, tabs.firstChild);
    tabs.setAttribute("data-ready", "");
    select(0);
  });

  /* ---------- table of contents: mark the section in view ---------- */
  var toc = document.querySelector(".docs-toc");
  if (toc && "IntersectionObserver" in window) {
    var links = {};
    toc.querySelectorAll("a[href^='#']").forEach(function (a) {
      links[a.getAttribute("href").slice(1)] = a;
    });
    var targets = Object.keys(links)
      .map(function (id) {
        return document.getElementById(id);
      })
      .filter(Boolean);
    var setActive = function (id) {
      Object.keys(links).forEach(function (key) {
        links[key].classList.toggle("is-active", key === id);
      });
    };
    var visible = new Map();
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          visible.set(entry.target.id, entry.isIntersecting);
        });
        var firstVisible = targets.find(function (t) {
          return visible.get(t.id);
        });
        if (firstVisible) setActive(firstVisible.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    targets.forEach(function (t) {
      io.observe(t);
    });
  }

  /* ---------- open the accordion a hash points into ---------- */
  var openTarget = function () {
    var id = location.hash.slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    var details = el.closest("details");
    if (details) details.open = true;
  };
  openTarget();
  window.addEventListener("hashchange", openTarget);
})();
