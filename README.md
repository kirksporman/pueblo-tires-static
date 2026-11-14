# Pueblo Tires & Service: static HTML build

Approved homepage plus proofed inner pages, as plain HTML, CSS and JS. No build step. Open `index.html` in a browser or serve the folder with any static host.

## Pages

| File | Page | Status |
| --- | --- | --- |
| `index.html` | Homepage | Approved by client |
| `about.html` | About | Proof, placeholder copy |
| `services.html` | Services | Proof, placeholder copy |
| `oil-changes.html` | Oil Changes | Proof, placeholder copy and prices |
| `coupons.html` | Coupons / Offers | Proof, placeholder offers and rebate amounts |
| `locations.html` | Locations | Proof, placeholder addresses and phones |
| `location-edinburg.html` | Single Location template (Edinburg sample) | Proof, placeholder content |

## Structure

```
index.html, about.html, services.html, oil-changes.html, coupons.html, locations.html, location-edinburg.html
css/styles.css   Homepage styles and shared design tokens (colors, type, buttons, cards, header, footer)
css/pages.css    Extra components for inner pages (page hero, timeline, oil packages, FAQ, location cards, map)
js/home.js       Hero slider, review and guide pagers (homepage)
img/             Logos, brand logos, photos
```

Inner pages load both stylesheets. The homepage loads `styles.css` only.

## Design tokens

Defined as CSS variables at the top of `css/styles.css`: `--red #DA281B`, `--yellow #FFC72C`, `--char #222021`, `--page #FAF8F4`, `--sand #F2EEE6`. Fonts: Barlow Condensed (display), Barlow (body), JetBrains Mono (labels), loaded from Google Fonts in each page head.

## Still to replace before launch

- All content marked placeholder: location names, addresses, phone numbers, hours, oil change prices, reviews on the location page, timeline copy on About.
- Coupons page: offer amounts and terms, tire rebate amounts, rewards program image and copy, financing link. Category chips and Text/Email/Print actions are non-functional; wire to the coupon system.
- `about.html`: the team photo frame (`.photo-ph`) needs a real group photo.
- `location-edinburg.html`: hero uses a stand-in shop photo. Swap in the real storefront.
- `locations.html`: the SVG map is a stylized stand-in. The homepage uses the live Steer shop selector for booking, so the Book buttons need to connect to Steer.
- `index.html`: the first hero slide and the Pueblo card image load from `treadpartners.com/wp-content/uploads/`. Move those two files into `img/` if you want the repo self-contained.
- Anchors that are still `#` (coupon actions, tips guides, careers, fleet, financing) need their destination pages.
- Location template: duplicate `location-edinburg.html` per store and update the name, address, phone, hours, map, coupons and reviews.

# Changelog

## 2.0.1 (2026-11-13)
chore: remove homepage concept index file

