'use strict';
(() => {
  const p = window.PROJECT;
  const el = id => document.getElementById(id);
  el('abstract-text').textContent = p.abstract;
  el('bibtex').textContent = p.bibtex;
  p.authors.forEach(author => { const span = document.createElement('span'); span.textContent = author; el('authors').append(span); });
  function renderResults(condition) {
    const data = p.realResults[condition];
    const bars = el('result-bars'); bars.replaceChildren();
    const body = el('real-results-body'); body.replaceChildren();
    p.methods.forEach((method, index) => {
      const value = data[index][4];
      const row = document.createElement('div'); row.className = 'bar-row' + (index === 4 ? ' ours' : '');
      const label = document.createElement('span'); label.className = 'bar-name'; label.textContent = method;
      const track = document.createElement('span'); track.className = 'bar-track'; track.setAttribute('aria-hidden', 'true');
      const fill = document.createElement('span'); fill.className = 'bar-fill'; fill.style.width = value + '%'; track.append(fill);
      const number = document.createElement('span'); number.className = 'bar-value'; number.textContent = value.toFixed(1) + '%';
      row.append(label, track, number); bars.append(row);
      const tr = document.createElement('tr'); if (index === 4) tr.className = 'ours';
      const th = document.createElement('th'); th.scope = 'row'; th.textContent = method; tr.append(th);
      data[index].forEach(value => { const td = document.createElement('td'); td.textContent = value.toFixed(1); tr.append(td); });
      body.append(tr);
    });
    document.querySelectorAll('[data-lighting]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lighting === condition)));
    el('real-table-caption').textContent = (condition === 'unseen' ? 'Unseen lighting' : 'Standard lighting') + ' · full-task success (%) · draft Table 3';
    el('result-summary').textContent = condition === 'unseen' ? 'TipDex-VTLA: 73.8% average success, versus 22.5% for T-Rex under unseen lighting (+51.3 percentage points, rounded).' : 'TipDex-VTLA: 87.5% average success, versus 71.3% for T-Rex under standard lighting (+16.2 percentage points using the reported averages).';
  }
  document.querySelectorAll('[data-lighting]').forEach(button => button.addEventListener('click', () => renderResults(button.dataset.lighting)));
  renderResults('unseen');
  const lightbox = el('lightbox');
  document.querySelectorAll('[data-figure]').forEach(button => button.addEventListener('click', () => {
    el('lightbox-image').src = button.dataset.figure;
    el('lightbox-image').alt = button.dataset.caption;
    el('lightbox-caption').textContent = button.dataset.caption;
    lightbox.showModal();
  }));
  lightbox.querySelector('button').onclick = () => lightbox.close();
  lightbox.addEventListener('click', event => {
    if (event.target !== lightbox) return;
    const b = lightbox.getBoundingClientRect();
    if (event.clientX < b.left || event.clientX > b.right || event.clientY < b.top || event.clientY > b.bottom) lightbox.close();
  });
  el('copy-citation').addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(p.bibtex); el('feedback').textContent = 'BibTeX copied.'; }
    catch {
      const selection = window.getSelection(), range = document.createRange();
      range.selectNodeContents(el('bibtex')); selection.removeAllRanges(); selection.addRange(range);
      el('feedback').textContent = 'Citation selected. Press Ctrl+C (Mac: ⌘C) to copy.';
    }
  });
})();
