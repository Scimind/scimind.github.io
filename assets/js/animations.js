(() => {
  const activate = () => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) return items.forEach(item => item.classList.add('is-visible'));
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    items.forEach(item => observer.observe(item));
  };
  window.addEventListener('scimind:content-rendered', activate, { once: true });
})();
