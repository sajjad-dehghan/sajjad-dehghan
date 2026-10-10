# Profile artwork · October 2026

This GitHub profile follows the existing creator design at https://sajjad-dehghan.ir/: #0c0c0c, #d7e2ea, #ae8af8, Kanit headings, Inter body copy, thin borders, large editorial type and the owner's existing transparent 3D portrait. No new portrait or fabricated interface was generated.

## Reproduce the image layouts

Run `node scripts/preview-profile.mjs`, open http://127.0.0.1:4331/ at a viewport at least 1200px wide and wait for fonts/images to finish loading. Capture each `[data-export]` section at its native bounding box to `assets/2026/<data-export>.png`. If the screenshot provider returns JPEG bytes, convert their encoding to PNG before saving the published files. The hero is 1200 × 700; each work card is 600 × 440. All screen images use `object-fit: contain`; DariWall uses three complete phone captures in a landscape card. Published PNGs are browser rasterizations of this HTML/CSS, not synthesized product screenshots. Source screenshots and portrait remain unchanged. Validate with `node scripts/validate-profile.mjs`.

## Sources and limitations

Screens copied from the owner's personal-site `public/projects` assets:

- LinkUp: public homepage (`linkup-home.jpg`).
- BAXI: actual web edition, synthetic demo fares (`galleries/baxi/pricing-breakdown-desktop.png`).
- ChatterAI: actual browser retrieval demo, original authored dataset, no connected ChatGPT (`chatter-ai-browser.jpg`).
- Sandwich: owner-supplied actual desktop capture (`sandwich-download-manager.png`).
- DariWall: actual Flutter frontend with synthetic offline data, not a live financial service (`galleries/dariwall/home.png`, `swap-form.png`, `missions.png`).
- Osgolia: actual local run with mock payments (`osgolia-home-v2.jpg`).
- Dino Dash: actual browser gameplay (`dino-dash.jpg`).
- Four In A Row / Tic-Tac-Py: actual browser editions of the original C / Python game rules (`four-in-a-row-browser.jpg`, `tic-tac-py-browser.jpg`).
- Wrist Motion: actual repository capture (`galleries/wrist-motion/desktop-persian.jpg`). Independent interface reconstruction/localization study; original product imagery belongs to Apple and its owners. No Apple affiliation claimed.

Portrait: the existing personal-site `public/images/sajjad-floating-head-v2.png`. Kanit 800 and Inter Latin WOFF2 reuse the site's cached Google Fonts files; their SIL Open Font Licenses are included in `../fonts/`. Old profile assets are retained for history but are no longer referenced by the README.
