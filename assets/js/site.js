(() => {
  const toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.hidden = false;
    const update = () => {
      const dark = document.documentElement.dataset.theme === 'dark';
      toggle.setAttribute('aria-pressed', String(dark));
      toggle.setAttribute('aria-label', dark ? '切换到浅色主题' : '切换到深色主题');
    };
    update();
    toggle.addEventListener('click', () => {
      const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = theme;
      try { localStorage.setItem('theme', theme); } catch (_) {}
      update();
    });
  }

  const search = document.querySelector('#post-search');
  if (search) {
    document.querySelector('.search-control').hidden = false;
    const cards = Array.from(document.querySelectorAll('.post-card'));
    const filter = () => {
      const terms = search.value.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      let count = 0;
      for (const card of cards) {
        const text = card.dataset.search.toLocaleLowerCase();
        card.hidden = !terms.every(term => text.includes(term));
        if (!card.hidden) count++;
      }
      document.querySelector('.no-results').hidden = count !== 0;
      document.querySelector('#search-status').textContent = terms.length ? `找到 ${count} 篇文章` : `共 ${count} 篇文章`;
    };
    search.addEventListener('input', filter);
    filter();
  }

  const headings = Array.from(document.querySelectorAll('.post-content h2, .post-content h3'));
  const toc = document.querySelector('.article-toc');
  if (toc && headings.length > 1) {
    headings.forEach((heading, index) => {
      if (!heading.id) heading.id = `section-${index + 1}`;
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `#${encodeURIComponent(heading.id)}`;
      link.textContent = heading.textContent;
      li.append(link);
      toc.querySelector('ol').append(li);
    });
    toc.hidden = false;
  }

  if (navigator.clipboard && window.isSecureContext) {
    document.querySelectorAll('.post-content pre').forEach(pre => {
      const code = pre.querySelector('code');
      if (!code) return;
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'copy-code';
      button.textContent = '复制代码';
      button.addEventListener('click', async () => {
        try { await navigator.clipboard.writeText(code.textContent); button.textContent = '已复制'; }
        catch (_) { button.textContent = '请手动复制'; }
        setTimeout(() => { button.textContent = '复制代码'; }, 1800);
      });
      pre.prepend(button);
    });
  }
})();
