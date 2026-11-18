'use strict';
(() => {
  const p = window.PROJECT;
  const el = id => document.getElementById(id);
  el('abstract-text').textContent = p.abstract;
  el('bibtex').textContent = p.bibtex;
  p.authors.forEach(author => { const span = document.createElement('span'); span.textContent = author; el('authors').append(span); });
  const isOurs = label => label === p.name || label === 'Full ' + p.name;
  function resultRow([label, ...values]) {
    const row = document.createElement('tr');
    if (isOurs(label)) row.className = 'ours';
    const heading = document.createElement('th'); heading.scope = 'row'; heading.textContent = label;
    row.append(heading);
    values.forEach(value => { const cell = document.createElement('td'); cell.textContent = value.toFixed(1); row.append(cell); });
    return row;
  }
  const simulationBody = el('simulation-results-body');
  p.simulationResults.forEach(group => {
    const row = document.createElement('tr'); row.className = 'table-group';
    const heading = document.createElement('th'); heading.colSpan = group.rows[0].length; heading.textContent = group.label;
    row.append(heading);
    simulationBody.append(row, ...group.rows.map(resultRow));
  });
  function renderResults(condition) {
    const data = p.realResults[condition];
    const bars = el('result-bars'); bars.replaceChildren();
    el('real-results-body').replaceChildren(...data.map(resultRow));
    el('ablation-results-body').replaceChildren(...p.ablationResults[condition].map(resultRow));
    data.forEach(entry => {
      const [method] = entry;
      const value = entry.at(-1);
      const row = document.createElement('div'); row.className = 'bar-row' + (isOurs(method) ? ' ours' : '');
      const label = document.createElement('span'); label.className = 'bar-name'; label.textContent = method;
      const track = document.createElement('span'); track.className = 'bar-track'; track.setAttribute('aria-hidden', 'true');
      const fill = document.createElement('span'); fill.className = 'bar-fill'; fill.style.width = value + '%'; track.append(fill);
      const number = document.createElement('span'); number.className = 'bar-value'; number.textContent = value.toFixed(1) + '%';
      row.append(label, track, number); bars.append(row);
    });
    document.querySelectorAll('[data-lighting]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lighting === condition)));
    const lighting = condition === 'unseen' ? 'Unseen lighting' : 'Standard lighting';
    el('real-table-caption').textContent = lighting + ' · full-task success (%) · Table 2';
    el('ablation-table-caption').textContent = lighting + ' · full-task success (%) · Table 3';
    const model = data.find(([method]) => isOurs(method));
    const bestBaseline = data.filter(([method]) => !isOurs(method)).sort((first, second) => second.at(-1) - first.at(-1))[0];
    const advantage = (model.at(-1) - bestBaseline.at(-1)).toFixed(1);
    el('result-summary').textContent = `${model[0]} averages ${model.at(-1).toFixed(1)}% under ${lighting.toLowerCase()}, ${advantage} percentage points above ${bestBaseline[0]} (${bestBaseline.at(-1).toFixed(1)}%).`;
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
