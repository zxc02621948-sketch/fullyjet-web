(function () {
  const mount = document.querySelector("[data-fj-footer]");
  if (!mount) return;

  const root = mount.getAttribute("data-root") || ".";
  const links = {
    about: root + "/index.html#about",
    services: root + "/index.html#services",
    featured: root + "/cases/index.html",
    overview: root + "/cases/index.html",
    footer: root + "/index.html#footer",
    logo: root + "/images/富立傑LOGO_250910-06.png",
    phone: "tel:0978798915",
    email: "mailto:victor383monkey@yahoo.com.tw",
    line: "https://line.me/R/ti/p/~YOUR_LINE_ID",
    facebook: "https://www.facebook.com/profile.php?id=100048974186390",
  };

  mount.innerHTML = `
    <footer id="footer" class="fj-footer">
      <div class="fj-footer-inner">
        <div class="fj-footer-grid">
          <section class="fj-footer-brand">
            <img src="${links.logo}" alt="富立傑木作裝修 LOGO">
            <p>以木作工藝為根基，整合全室裝修逾二十年。陳先生親自監造每一場工程，是中部地區業主最信賴的裝修夥伴。</p>
            <p class="fj-footer-tagline">安心・可靠・專業 | 木作統包・空間整合</p>
            <a class="fj-footer-call" href="${links.phone}">找陳先生・免費諮詢 ›</a>
          </section>

          <section>
            <h4>快速連結</h4>
            <ul class="fj-footer-list">
              <li><a href="${links.about}">關於我們</a></li>
              <li><a href="${links.services}">服務項目</a></li>
              <li><a href="${links.featured}">精選案例</a></li>
              <li><a href="${links.overview}">案例總覽</a></li>
              <li><a href="${links.footer}">聯絡陳先生</a></li>
            </ul>
          </section>

          <section>
            <h4>聯絡資訊</h4>
            <ul class="fj-footer-contact">
              <li>台中市大甲區<br>文武路 143-1 號</li>
              <li><span style="color:#c8a870;">服務範圍</span><br>新竹・苗栗・台中<br>彰化・南投・雲林・嘉義</li>
              <li>陳先生（專案負責人）</li>
              <li><a href="${links.phone}">0978-798-915</a></li>
              <li><a href="${links.email}">victor383monkey@yahoo.com.tw</a></li>
            </ul>
          </section>
        </div>
        <div class="fj-footer-bottom">
          <p>© 2026 富立傑有限公司. All Rights Reserved.</p>
          <p>安心・可靠・專業 | 木作統包・空間整合</p>
        </div>
      </div>
    </footer>

    <aside class="fj-float-dock" aria-label="快速聯絡">
      <div class="fj-float-item">
        <span class="fj-float-tip">撥打電話</span>
        <a class="fj-float-btn" href="${links.phone}" aria-label="撥打電話">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
        </a>
      </div>
      <div class="fj-float-item">
        <span class="fj-float-tip">加入 LINE</span>
        <a class="fj-float-btn fj-float-btn--line" href="${links.line}" target="_blank" rel="noopener noreferrer" aria-label="加入 LINE">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 4.2c-4.25 0-7.7 3.15-7.7 7.05c0 3.34 2.53 6.14 5.93 6.85l-.56 2.62l3.06-2.28c4.04-.3 7.27-3.31 7.27-7.19c0-3.9-3.45-7.05-7.7-7.05z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            <text x="12" y="12.25" text-anchor="middle" dominant-baseline="middle" font-family="Arial, sans-serif" font-size="4.7" font-weight="700" fill="currentColor">LINE</text>
          </svg>
        </a>
      </div>
      <div class="fj-float-item">
        <span class="fj-float-tip">Facebook 粉絲頁</span>
        <a class="fj-float-btn" href="${links.facebook}" target="_blank" rel="noopener noreferrer" aria-label="Facebook 粉絲頁">
          <svg fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </a>
      </div>
      <div class="fj-float-item">
        <span class="fj-float-tip">AI 線上客服</span>
        <a class="fj-float-btn" href="#" aria-label="AI 線上客服">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z"/>
          </svg>
        </a>
      </div>
    </aside>
  `;
})();
