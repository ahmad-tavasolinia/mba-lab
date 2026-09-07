# MBA Lab redesign — GitHub upload

## Background image
The new homepage background is already included in this package.

Upload this exact file to:

`public/hero-mba-lab.png`

The code references it as:

`/hero-mba-lab.png`

Do not put the image in `src/`, and do not rename it unless you also change the URL in `src/app/globals.css`.

## Recommended GitHub deployment

1. Extract this ZIP on your computer.
2. Replace the files in your existing MBA Lab repository with the extracted files.
3. Make sure `public/hero-mba-lab.png` exists in the repository.
4. Commit and push the changes.
5. GitHub Actions will deploy the Next.js site using the existing `.github/workflows/deploy.yml` workflow.

If you use GitHub's web interface, upload the extracted repository files/folders — GitHub will not automatically turn a ZIP uploaded through the normal file-upload interface into a repository tree.
