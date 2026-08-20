/**
 * Renders the shared header/nav and footer into every page, and provides
 * small helpers used by the per-page scripts. Depends on data.js being
 * loaded first.
 */

function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function shuffled(array) {
  const result = array.slice();
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function personPhotoHtml(person) {
  const file = person.image ? person.image : "default-people.jpg";
  return (
    `<img class="avatar-photo" src="assets/people/${file}" alt="${person.name}" ` +
    `onerror="this.onerror=null; this.src='assets/people/default-people.jpg';" />`
  );
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const activePage = document.body.dataset.page;

  const navLinks = NAV.map((item) => {
    const activeClass = item.page === activePage ? " active" : "";
    return `<a class="nav-link${activeClass}" href="${item.href}">${item.label}</a>`;
  }).join("");

  el.innerHTML = `
    <div class="header-inner">
      <a class="brand" href="index.html">
        <img class="brand-logo" src="assets/sage-logo.png" alt="${SITE.headerLabel}" />
      </a>
      <a class="partner-logo-link" href="https://www.bristol.ac.uk/" target="_blank" rel="noopener">
        <img class="partner-logo" src="assets/bristol-logo.jpg" alt="University of Bristol" />
      </a>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav class="site-nav" id="site-nav">${navLinks}</nav>
    </div>
  `;

  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("site-nav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;

  el.innerHTML = `
    <div class="footer-inner">
      <div class="footer-address">
        <strong>${SITE.groupName}</strong><br />
        ${SITE.buildingName}<br />
        ${SITE.street}<br />
        ${SITE.city}, ${SITE.postcode}<br />
        ${SITE.country}
      </div>
      <div class="footer-links">
        <a href="${SITE.github}" target="_blank" rel="noopener">GitHub</a>
        <a href="mailto:${SITE.email}">${SITE.email}</a>
      </div>
    </div>
    <div class="footer-credit">
      &copy; Spatial Analysis and GeoAI Research Group at Bristol ${new Date().getFullYear()}
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
});
