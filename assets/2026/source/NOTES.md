# Profile artwork · October 2026

This GitHub profile follows the existing creator design at https://sajjad-dehghan.ir/: #0c0c0c, #d7e2ea, #ae8af8, Kanit headings, Inter body copy, thin borders, large editorial type and the owner's existing transparent 3D portrait. No new portrait or fabricated interface was generated.

## Reproduce the image layouts

Run `node scripts/preview-profile.mjs`, open http://127.0.0.1:4331/ at a viewport at least 1200px wide and wait for fonts/images to finish loading. Capture each `[data-export]` section at its native bounding box to `assets/2026/<data-export>.png`. If the screenshot provider returns JPEG bytes, convert their encoding to PNG before saving the published files. The hero is 1200 × 700; each work card is 600 × 440. All screen images use `object-fit: contain`; DariWall uses three complete phone captures in a landscape card. Published PNGs are browser rasterizations of this HTML/CSS, not synthesized product screenshots. Source screenshots and portrait remain unchanged. Validate with `node scripts/validate-profile.mjs`.

## Animated hero

The same unchanged portrait is now animated with a six-second CSS loop: a gentle vertical float (12px), small roll (1.5 degrees) and perspective turn (5 degrees). This is motion applied to the existing stylized portrait, not a new 3D mesh or a regenerated face. Only the portrait moves; headings and contact copy stay still. The source HTML honors `prefers-reduced-motion`.

To reproduce the GitHub-compatible GIF, capture the 1200 × 700 hero from `design.html?frame=0` through `?frame=59` using the preview server, saving browser frames as `.preview/frames/00.jpg` through `59.jpg`. Verify fonts and the portrait are fully loaded before each capture. Run `node scripts/build-hero-gif.mjs` with the `sharp` package installed (or set `SHARP_MODULE` to an existing sharp entry file). It encodes 60 frames at 100ms each, repeating indefinitely. The README uses `hero-animated.gif` with `hero.png` as the reduced-motion fallback. Encoding is format conversion of native browser captures; no photo editing or new face generation is involved.

## Original media

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
- Nocturne Reserve: unchanged `docs/images/hero.webp` from source revision `60db54ee57ebb2c870b1980fe84ea949ad967d8d` of https://github.com/sajjad-dehghan/nocturne-reserve, saved as `../nocturne.webp` (1440 × 900; SHA-256 `46e3772bec8c6dc7bb44fdfd28d638a67cbdf46c5ec3ebcdff00913230abd8a2`). An actual implementation capture, not a newly generated mockup; the imagery inside the interface is AI-generated. Independent study referencing Vesper by Scrolltide, with hybrid photographic/WebGL rendering and localStorage-only demonstration reservations. No official affiliation or live commerce is claimed. The original selected work order and animated portrait remain unchanged.

Portrait: the existing personal-site `public/images/sajjad-floating-head-v2.png`. Kanit 800 and Inter Latin WOFF2 reuse the site's cached Google Fonts files; their SIL Open Font Licenses are included in `../fonts/`. Old profile assets are retained for history but are no longer referenced by the README.
