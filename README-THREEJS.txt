# Portfolio with Three.js aura

## Requirements
- Install Node.js (LTS): https://nodejs.org/
- A modern browser with WebGL enabled.

## Run locally
Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

The Three.js scene is in `three-scene.js`. It creates lightweight orbital rings and a coloured particle halo around the hero portrait. It is decorative and does not replace the portrait images or existing STEAV/AURA reveal.
Keep the `assets/` folder alongside `index.html`, `style.css`, `script.js`, and `three-scene.js`.
