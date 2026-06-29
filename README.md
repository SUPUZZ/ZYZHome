# ZYZ Home

A modern, SEO-optimized static website for **ZYZ Home** -- a home furnishings brand featuring smart trash cans and solid wood furniture.

- **Live Site**: https://zyzhome.com
- **Amazon Store**: https://www.amazon.com/stores/ZYZLIVING/page/F11979F5-F581-47CB-9717-7A19A6B0B1EC

## Overview

This is a static HTML/CSS/JS website built for performance, accessibility, and search engine visibility. It showcases 17 products across 5 categories and directs customers to the Amazon store for purchases.

## Product Catalog (17 Products)

| Category | Count | ASINs |
|----------|-------|-------|
| Trash Can | 6 | B0G7FJH36B, B0G7FV1NYZ, B0G7F6XRSL, B0G7FGW6YV, B0G7F8JGK5, B0G7FM6T2N |
| Rocking Chair | 4 | B0FWCG9FSL, B0GLH18B3V, B0GLH2ZWK6, B0FWCHQG9X |
| Side Table | 1 | B0G3W8BRQ1 |
| Ottoman | 3 | B0G3PGY14X, B0G3PRMFN6, B0G3PRVQ7K |
| Swivel Chair | 3 | B0GJ2YSFVW, B0GJ2TTRRM, B0GJ4X27RY |

## Project Structure

```
ZYZHome/
|-- index.html
|-- trash-can.html
|-- rocking-chair.html
|-- side-table.html
|-- ottoman.html
|-- swivel-chair.html
|-- about.html
|-- privacy.html
|-- terms.html
|-- contact.html
|-- js/
|   -- main.js
|-- images/
|   -- {ASIN}.jpg (17 product images)
|-- sitemap.xml
|-- robots.txt
|-- CNAME
|-- deploy.ps1
|-- SEO_REPORT.md
-- .github/workflows/deploy.yml
```

## SEO Features

- Schema.org structured data (CollectionPage, ItemList, BreadcrumbList)
- Open Graph and Twitter Card meta tags
- Canonical URLs
- Image sitemap entries
- Semantic HTML5 markup
- Lazy loading images
- Mobile-responsive design

## Development

### Local Preview

Open any HTML file directly in a browser, or serve with a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve .
```

### Deployment

**Option 1: PowerShell Script**

```powershell
.\deploy.ps1
```

**Option 2: GitHub Actions**

Push to `main` branch. The workflow in `.github/workflows/deploy.yml` automatically deploys to GitHub Pages.

## Tech Stack

- Vanilla HTML5 / CSS3 / JavaScript (ES6+)
- No build tools or frameworks required
- GitHub Pages for hosting
- Custom domain via CNAME

## License

Copyright 2026 ZYZ Home. All rights reserved.
