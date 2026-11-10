'use strict';
(() => {
  const config = window.PROJECT;
  const dialog = document.getElementById('demo-dialog');
  const dialogPlayer = document.getElementById('demo-dialog-player');
  const svgPlay = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 5 10 7-10 7V5Z" fill="currentColor"/></svg>';
  const svgExpand = '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>';
  function make(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function url(value) {
    if (!value || !value.trim()) return null;
    try { const parsed = new URL(value, location.href); return ['http:', 'https:', 'file:'].includes(parsed.protocol) ? parsed.href : null; } catch { return null; }
  }
  function player(item) {
    const video = make('video', 'demo-video');
    video.controls = true; video.playsInline = true; video.preload = 'none';
    video.setAttribute('aria-label', item.title + '演示视频');
    if (url(item.poster)) video.poster = url(item.poster);
    return video;
  }
  function showError(video, message) {
    const parent = video.parentElement;
    if (!parent || parent.querySelector('.demo-playback-error')) return;
    const error = make('div', 'demo-playback-error');
    error.setAttribute('role', 'status');
    error.append(make('p', '', message));
    const retry = make('button', '', '重新加载'); retry.type = 'button';
    retry.onclick = () => { error.remove(); video.load(); video.play().catch(() => showError(video, '无法播放，请检查视频路径或稍后重试。')); };
    error.append(retry); parent.append(error);
  }
  function watchErrors(video) {
    video.addEventListener('error', () => showError(video, '视频暂时无法播放，请重试。'));
  }
  async function start(video, item) {
    if (!video.getAttribute('src')) video.src = url(item.src);
    try { await video.play(); }
    catch (error) { if (error.name !== 'AbortError') showError(video, '视频未能开始播放，请重试。'); }
  }
  function enlarge(item) {
    document.querySelectorAll('video').forEach(video => video.pause());
    document.getElementById('demo-dialog-title').textContent = item.title;
    const stage = make('div', 'demo-modal-stage');
    const video = player(item); watchErrors(video); stage.append(video);
    dialogPlayer.replaceChildren(stage); dialog.showModal(); start(video, item);
  }
  function render(items, id, kind) {
    const target = document.getElementById(id); target.replaceChildren();
    items.forEach((item, index) => {
      const card = make('article', 'demo-card' + (!url(item.src) ? ' coming-card' : ''));
      const stage = make('div', 'demo-stage');
      const number = make('span', 'demo-number', String(index + 1).padStart(2, '0'));
      if (url(item.src)) {
        const video = player(item); watchErrors(video); video.controls = false;
        const play = make('button', 'demo-play'); play.type = 'button';
        play.setAttribute('aria-label', '播放' + item.title); play.innerHTML = '<span class="demo-play-circle">' + svgPlay + '</span><span class="demo-play-label">播放演示</span>';
        play.onclick = () => start(video, item);
        video.addEventListener('play', () => { play.hidden = true; number.hidden = true; video.controls = true; });
        video.addEventListener('ended', () => { play.hidden = false; number.hidden = false; video.controls = false; });
        stage.append(video, play, number);
        if (item.duration) stage.append(make('span', 'demo-duration', item.duration));
      } else {
        stage.classList.add('coming-stage');
        stage.innerHTML = '<div class="coming-art" aria-hidden="true"><span class="bean bean-one"></span><span class="bean bean-two"></span><span class="bean bean-three"></span><span class="bean bean-four"></span><span class="bean-bowl"></span></div><span class="coming-label">COMING SOON</span><p>下一段演示，敬请期待。</p>';
        stage.append(number);
      }
      const info = make('div', 'demo-info');
      const heading = make('div', 'demo-title-row');
      const title = make('h3', '', item.title); heading.append(title);
      heading.append(make('span', 'demo-kind', url(item.src) ? (kind === 'real' ? '实物' : '仿真') : '待更新'));
      info.append(heading, make('p', 'demo-task', item.task), make('p', 'demo-description', item.caption));
      const footer = make('div', 'demo-card-footer');
      footer.append(make('span', '', kind === 'real' ? 'REAL WORLD' : 'SIMULATION'));
      if (url(item.src)) {
        const expand = make('button', 'demo-expand', ''); expand.type = 'button';
        expand.innerHTML = svgExpand + '<span>放大查看</span>';
        expand.setAttribute('aria-label', '放大查看' + item.title); expand.onclick = () => enlarge(item);
        footer.append(expand);
      } else footer.append(make('span', 'coming-status', '视频准备中'));
      info.append(footer); card.append(stage, info); target.append(card);
    });
  }
  render(config.realDemos || [], 'real-demos', 'real');
  render(config.simulationDemos || [], 'simulation-demos', 'simulation');
  document.addEventListener('play', event => {
    if (event.target.tagName !== 'VIDEO') return;
    document.querySelectorAll('video').forEach(video => { if (video !== event.target) video.pause(); });
  }, true);
  dialog.querySelector('.demo-dialog-close').onclick = () => dialog.close();
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    const video = dialogPlayer.querySelector('video');
    if (video) { video.pause(); video.removeAttribute('src'); video.load(); }
    dialogPlayer.replaceChildren();
  });
})();
