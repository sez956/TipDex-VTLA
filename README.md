# TipDex-VTLA project website

Project page for **TipDex-VTLA: Learning When to Refine Actions with Touch for Dexterous Manipulation**.

Live website: https://sez956.github.io/TipDex-VTLA/

This repository contains the project website and demonstration assets. It does not currently contain the research model implementation. The paper is a research draft; the website makes no claim of conference acceptance.

## Preview

Run `python -m http.server 8765` in this folder, then visit http://localhost:8765/ . The website also works when opening index.html directly.

## Update

- `content.js`: author list, abstract, demo catalog and evaluation data (Tables 1–3).
- `index.html`, `research.css`: homepage sections and lighting gallery layout.
- `assets/paper/`: figures approved for display; no manuscript PDF is distributed.
- `assets/demos/`: four real-world videos, eight simulation videos and their posters.
- `assets/lighting/`: six excerpts of tissue extraction and mung bean pouring under lighting disturbances, with three RGB views and a tactile heatmap per video.

All clips are H.264 MP4 web copies and load on demand. Five lighting excerpts play at 3× speed; the flashing-light excerpt is shown at 1× and has a playback warning. Source recordings are preserved outside this repository.

## Results and attribution

The results and method figures reflect the updated manuscript. Real-world and simulation results use different evaluation configurations, described on the page. Both VASE and TACE are enabled in the updated optical-tactile simulation evaluation. Published simulation baselines retain their reported configurations. The lighting clips illustrate disturbances and are separate from the aggregate results.

The automatically numbered simulation downloads were matched to task labels by visual inspection.

## Deployment

GitHub Pages publishes the repository's main branch at `/` (root). `.nojekyll` keeps this a buildless static site. Push updates to main to publish new versions. No package installation, backend or runtime secrets are required.

## Manuscript privacy

No manuscript PDF is included or linked. This repository starts with a new history, independently of the earlier private repository. PDF files are excluded by .gitignore.
