# Mudassir Khan - CCTV Portfolio

Static frontend (HTML, CSS, JavaScript). No build step needed.

## Run
Open `index.html` in a browser, or serve the folder:

    npx serve .

## Structure
    index.html                     page markup
    css/                           stylesheets, loaded in numeric order (later files override earlier ones)
      01-base.css ... 10-luxury-theme.css
    js/
      scroll-top.js                always start at the top (loaded in <head>)
      reveal-and-tilt.js           scroll reveal, counters, 3D card tilt
      gallery.js                   project photo gallery
      smooth-scroll.js             smooth wheel scrolling + anchor links
      hero-effects.js              hero heading animation, magnetic buttons
      nav-and-quote.js             mobile menu + "Send on WhatsApp" quote form
      scroll-progress-and-cards.js progress bar, REC badge, card glow
      footer-fit.js                fits the big footer name to the screen width
    assets/images/
      favicon.png                  browser tab icon
      profile/mudassir-khan.webp
      projects/<project-name>/cover.webp, 02-....webp, 03-....webp

## Notes
- Keep the CSS files in the same order in `index.html`.
- To change a photo, replace the file with the same name (WebP).
- Each project's first gallery photo is its `cover.webp`.
- To add a project photo: put the image in the project folder and add a
  `<figure><img src="..." alt="..."><figcaption>...</figcaption></figure>` inside
  that project's `<div hidden id="src-...">` block in `index.html`.
- Fonts (Cormorant Garamond, Manrope) load from Google Fonts, so they need internet.
