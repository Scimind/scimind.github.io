(() => {
  const root = document.documentElement;
  const page = document.body.dataset.page || 'home';
  const nav = [
    ['about', 'About'], ['research', 'Research'], ['projects', 'Projects'],
    ['publications', 'Publications'], ['people', 'People'], ['news', 'News']
  ];
  const headerMount = document.querySelector('#site-header');
  const footerMount = document.querySelector('#site-footer');
  if (headerMount) {
    headerMount.innerHTML = `<header class="site-header"><div class="shell site-header__inner"><a class="brand" href="/" aria-label="SCIMind home"><span class="brand__mark" aria-hidden="true"></span><span>SCIMIND</span></a><nav aria-label="Primary navigation"><button class="menu-toggle" type="button" aria-expanded="false" aria-label="Open navigation menu"><span></span></button><ul class="nav-list">${nav.map(([id,label]) => `<li><a href="${page === 'home' ? '#' + id : '/' + id + '/'}">${label}</a></li>`).join('')}</ul></nav></div></header>`;
    const header = headerMount.firstElementChild;
    const toggle = header.querySelector('.menu-toggle');
    const setHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 20);
    toggle.addEventListener('click', () => {
      const open = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
    });
    header.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { header.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }));
    window.addEventListener('scroll', setHeader, { passive: true }); setHeader();
  }
  if (footerMount) footerMount.innerHTML = `<footer class="site-footer"><div class="shell"><div class="footer__main"><div class="footer__title">SCIMind Laboratory<span>AI for Science · Experimental Intelligence</span></div><div class="footer__affiliation"><span>Institute of Automation, Chinese Academy of Sciences</span><span>State Key Laboratory of Multimodal Artificial Intelligence Systems</span><span>AI for Science Division</span></div></div><div class="footer__bottom"><span>ALGORITHM · SIMULATION · EXPERIMENT</span><span>© ${new Date().getFullYear()} SCIMind Laboratory</span></div></div></footer>`;
  root.classList.add('js');
})();
