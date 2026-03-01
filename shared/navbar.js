(function () {
  const mount = document.querySelector("[data-fj-navbar]");
  if (!mount) return;

  const root = mount.getAttribute("data-root") || ".";
  const active = mount.getAttribute("data-active") || "";

  const links = {
    home: root + "/index.html#hero",
    about: root + "/index.html#about",
    services: root + "/index.html#services",
    featured: root + "/index.html#portfolio",
    overview: root + "/cases/index.html",
    quote: root + "/index.html#quote",
    footer: root + "/index.html#footer",
    logo: root + "/images/富立傑LOGO_250910-07.png",
  };

  function activeClass(key) {
    return active === key ? "is-active" : "";
  }

  mount.innerHTML =
    '<header class="fj-site-header">' +
      '<nav class="fj-site-nav">' +
        '<a href="' + links.home + '" class="fj-site-logo" aria-label="回到首頁">' +
          '<img src="' + links.logo + '" alt="富立傑木作裝修 LOGO">' +
        "</a>" +
        '<ul class="fj-site-links">' +
          '<li><a href="' + links.about + '" class="' + activeClass("about") + '">關於我們</a></li>' +
          '<li><a href="' + links.services + '" class="' + activeClass("services") + '">服務項目</a></li>' +
          '<li><a href="' + links.featured + '" class="' + activeClass("featured") + '">精選案例</a></li>' +
          '<li><a href="' + links.overview + '" class="' + activeClass("overview") + '">案例總覽</a></li>' +
          '<li><a href="' + links.quote + '" class="' + activeClass("quote") + '">線上估價</a></li>' +
        "</ul>" +
        '<a href="' + links.footer + '" class="fj-contact-btn">聯絡我們</a>' +
        '<button type="button" class="fj-mobile-toggle" id="fj-mobile-toggle" aria-label="開啟選單">☰</button>' +
      "</nav>" +
      '<div class="fj-mobile-panel" id="fj-mobile-panel">' +
        '<a href="' + links.about + '">關於我們</a>' +
        '<a href="' + links.services + '">服務項目</a>' +
        '<a href="' + links.featured + '">精選案例</a>' +
        '<a href="' + links.overview + '">案例總覽</a>' +
        '<a href="' + links.quote + '">線上估價</a>' +
      "</div>" +
    "</header>";

  const mobileToggle = document.getElementById("fj-mobile-toggle");
  const mobilePanel = document.getElementById("fj-mobile-panel");
  if (!mobileToggle || !mobilePanel) return;

  mobileToggle.addEventListener("click", function () {
    mobilePanel.classList.toggle("is-open");
  });

  mobilePanel.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      mobilePanel.classList.remove("is-open");
    });
  });
})();
