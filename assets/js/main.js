(() => {
  document.documentElement.classList.add('is-ready');
  const followInitialHash = async () => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (!target) return;
    const priorImages = [...document.images].filter(image =>
      image.compareDocumentPosition(target) & Node.DOCUMENT_POSITION_FOLLOWING
    );
    priorImages.forEach(image => { image.loading = 'eager'; });
    await Promise.all(priorImages.map(image => image.complete
      ? Promise.resolve()
      : new Promise(resolve => {
          image.addEventListener('load', resolve, { once: true });
          image.addEventListener('error', resolve, { once: true });
        })
    ));
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'instant' }));
  };
  window.addEventListener('scimind:content-rendered', followInitialHash, { once: true });
})();
