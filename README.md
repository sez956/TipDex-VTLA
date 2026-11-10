# TipDex-VTLA project website

Project page for **TipDex-VTLA: Learning When to Refine Actions with Touch for Dexterous Manipulation**.

Live website: https://sez956.github.io/TipDex-VTLA/

This repository contains the project website and demonstration assets. It does not currently contain the research model implementation. The paper is a research draft; the website makes no claim of conference acceptance.

## Preview

Run `python -m http.server 8765` in this folder, then visit http://localhost:8765/ . The website also works when opening index.html directly.

## Update

- `content.js`: author list, abstract, real-world result data and demonstration cards.
- `index.html`: method summary, simulation results, ablations and figure descriptions.
- `assets/paper/`: figures approved for display; no manuscript PDF is distributed.
- `assets/demos/`: three real-world videos, eight simulation videos and their posters.
- The fourth real-world card is reserved for mung bean pouring. Fill its `src`, `poster` and `duration` in `content.js` to activate it.

Real-world videos are H.264 / AAC web copies at their original 1440×1440 resolution. All videos load on demand. Source recordings are preserved outside this repository.

## Results and attribution

Text, authors, figures and numerical results are based on the author's research draft. Real-world and simulation results use different evaluation configurations, described on the page. Published simulation baselines retain their original configurations. The simulation adaptation is single-stage optical-tactile fine-tuning; it is not presented as the complete two-stage real-world VASE/TACE evaluation.

The automatically numbered simulation downloads were matched to task labels by visual inspection; confirm labels against the original task recordings before a formal release. The result tables were transcribed from draft Tables 1, 3 and 4.

## Deployment

GitHub Pages publishes the repository's main branch at `/` (root). `.nojekyll` keeps this a buildless static site. Push updates to main to publish new versions. No package installation, backend or runtime secrets are required.

## Manuscript privacy

No manuscript PDF is included or linked. This repository starts with a new history, independently of the earlier private repository. PDF files are excluded by .gitignore.
