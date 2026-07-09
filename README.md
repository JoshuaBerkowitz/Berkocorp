# Berkocorp static website

This repository contains a completely static version of the Berkocorp website. It uses plain HTML, CSS, and JavaScript and does not require Node.js, npm, React, Vite, a database, or a server-side API.

## Project structure

```text
/
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── pages/
├── README.md
└── .nojekyll
```

The `assets/fonts` and `pages` folders are intentionally available for future local fonts and additional static pages. The current site uses system fonts and a single-page layout.

## Preview locally

The site can be opened directly by double-clicking `index.html`. For the most accurate local preview, serve the folder with any basic static server. For example, if Python is installed:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

## Publish with GitHub Pages

1. Create a new GitHub repository or open the repository you want to use.
2. Upload the contents of this folder to the root of the repository. `index.html` must remain at the repository root.
3. Commit the files to the repository's default branch, usually `main`.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose the `main` branch and the `/ (root)` folder, then click **Save**.
7. GitHub will display the public Pages URL after deployment finishes.

The `.nojekyll` file tells GitHub Pages to serve the project exactly as uploaded. All site resources use relative paths, so the site works from either a user/organization Pages domain or a repository subpath.

## Updating the site

- Edit page content in `index.html`.
- Edit presentation and responsive behavior in `styles.css`.
- Edit portfolio data and interactions in `script.js`.
- Keep all site images in `assets/images` and icons in `assets/icons`.
- No compilation or build command is required after an edit.
