# Yash Lalwani — Portfolio

## Run locally

From the repository root, run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000 in your browser. Use a web server rather than double-clicking index.html, because the site uses JavaScript modules and root-relative asset URLs.

## Included files

- `index.html`, `personal.css`, `assets/`, and `resume.pdf`: complete ready-to-serve website.
- `source/personalize.py`: editable resume content, experience entries, projects, and personalization rules.
- `source/guide.js`: local portfolio chat responses and visual-effect commands.
- `source/illustrations.py`: generates the RAG-Engine and experience architecture illustrations.
- `source/reference-app.js`: reference frontend bundle used by the personalization script.
- `DESIGN.md`: design notes and known differences.

## Make changes

Edit the content in `source/personalize.py`, then run from this folder:

```sh
python3 source/personalize.py
python3 source/illustrations.py
```

Edit `personal.css` for CSS overrides. Replace `resume.pdf` to update your resume. Refresh the browser after changes.

Project cards use the uploaded PNG screenshots in `assets/`, with `assets/rag.svg` retained for RAG-Engine. Update their order, descriptions, and links in the `projects` list in `source/personalize.py`. The F1 card also links to `F1_Project.pdf` in the repository root.

## Deploy

Serve the repository root from your static website host. For GitHub Pages, use the `main` branch and `/ (root)` publishing folder. `.nojekyll` ensures the static files are served without Jekyll processing. For GitHub Pages under a repository subpath, change root-relative asset URLs and dynamic import paths or use a custom domain/root site.

## Important implementation details

This is the actual code used for the delivered website. The frontend is a personalized compiled React bundle, not a conventional editable React/JSX component project. The Python scripts apply the personal content to that bundle. There is no npm installation or build step required to run it.

The chat is a local rule-based portfolio guide, not an LLM service. It requires no API key. Fonts load from Google Fonts, so full visual fidelity requires internet access.

The visual implementation is adapted from https://jb-cheng.github.io. Included library license notices are retained. Music: Ad Astra — Steven Grove / MSR. Included third-party artwork/music are not represented as original work by Yash. This archive does not grant additional licenses to third-party material.
