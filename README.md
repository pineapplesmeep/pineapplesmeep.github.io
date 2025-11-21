# Portfolio Website

A simple Next.js portfolio website configured for GitHub Pages.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

Build the static site:

```bash
npm run build
```

This will create an `out` directory with the static files.

### Deploy to GitHub Pages

1. Build the site: `npm run build`
2. Commit and push the `out` directory to your repository
3. In your GitHub repository settings, go to Pages and set the source to the `out` folder

Alternatively, you can use GitHub Actions to automate the deployment. The site will be available at `https://yourusername.github.io/pineapplesmeep.github.io/`

## Customization

Edit `app/page.tsx` to customize the portfolio content.

