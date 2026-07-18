(function () {
  var NAV_LINKS = [
    { href: "index.html", label: "Home" },
    { href: "projects.html", label: "Projects" },
    { href: "publications.html", label: "Publications" },
    { href: "cv.html", label: "CV" },
    { href: "contact.html", label: "Contact" }
  ];

  var SOCIAL_LINKS = [
    { href: "https://www.linkedin.com/in/harshjmodi/", title: "LinkedIn", icon: "fa-brands fa-linkedin" },
    { href: "https://scholar.google.com/citations?user=uzh7UDsZdRAC&hl=en", title: "Google Scholar", icon: "fa fa-graduation-cap" },
    { href: "https://github.com/harshjmodi1996", title: "GitHub", icon: "fa-brands fa-github" },
    { href: "https://orcid.org/0009-0000-1041-2277", title: "ORCiD", icon: "fa-brands fa-orcid" },
    { href: "https://zh.engr.tamu.edu/", title: "Lab Website", icon: "fa fa-globe" }
  ];

  function currentPage() {
    var path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }

  function renderHeader() {
    var current = currentPage();
    var links = NAV_LINKS.map(function (link) {
      var activeClass = link.href === current ? " active" : "";
      return '<a href="' + link.href + '" class="' + activeClass.trim() + '">' + link.label + "</a>";
    }).join("");

    return (
      '<div class="nav">' +
      '<a href="index.html" class="nav-brand">Harsh Modi</a>' +
      '<button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">' +
      "<span></span><span></span><span></span>" +
      "</button>" +
      '<nav class="nav-links" id="navLinks">' + links + "</nav>" +
      "</div>"
    );
  }

  function renderSocialRow() {
    return SOCIAL_LINKS.map(function (s) {
      return (
        '<a class="social-icon" href="' + s.href + '" title="' + s.title +
        '" target="_blank" rel="noopener"><i class="' + s.icon + '"></i></a>'
      );
    }).join("");
  }

  function renderFooter() {
    return (
      '<div class="container">' +
      '<div class="social-row">' + renderSocialRow() + "</div>" +
      '<div class="footer-name">Harsh Jashvantbhai Modi</div>' +
      "<div>PhD Candidate, Mechanical Engineering, Robotics</div>" +
      "</div>"
    );
  }

  function mount() {
    var headerEl = document.getElementById("site-header");
    var footerEl = document.getElementById("site-footer");

    if (headerEl) {
      headerEl.innerHTML = renderHeader();
      var toggle = document.getElementById("navToggle");
      var links = document.getElementById("navLinks");
      toggle.addEventListener("click", function () {
        var isOpen = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          links.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    if (footerEl) {
      footerEl.innerHTML = renderFooter();
    }

    var heroSocialEl = document.getElementById("hero-social");
    if (heroSocialEl) {
      heroSocialEl.innerHTML = renderSocialRow();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
