# Wei-Hao Lee — personal site

An Astro site designed for GitHub Pages. It uses Markdown/MDX content collections for research and blog posts, with LaTeX and syntax highlighting built in.

## Local development

```sh
npm install
npm run dev
```

## Add content

- Research: add `.md` or `.mdx` files in `src/content/research/`.
- Blog: add `.md` or `.mdx` files in `src/content/blog/`.
- Packages: replace the starter data in `src/pages/packages.astro` (or move it to a collection later).
- Gallery: place metadata-free, web-sized images in `public/images/gallery/`, then add their filename and optional location/alt text to `src/data/gallery.json`. The JSON array order controls the display order. Keep original-resolution source photos outside Git; the local preparation script expects ignored `DSCF*.JPG` sources in `public/images/backgrounds/`.

## Before publishing

1. Replace starter biography, research, package, and profile links.
2. Set the repository's Pages source to **GitHub Actions**.
3. If publishing at `username.github.io/repository-name`, add `base: '/repository-name'` in `astro.config.mjs` and use `import.meta.env.BASE_URL` for root-relative assets/links.

## About photo protection

The gallery blocks casual dragging and right-clicking and uses metadata-free, web-sized previews. No public website can prevent determined copying or screenshots; never publish original-resolution files if you need to retain control of them.
