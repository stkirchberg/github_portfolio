# S. T. Kirchberg | Personal Portfolio

A sleek, terminal-inspired personal website built with a focus on a arch linux aesthetic, specifically tailored for a Linux enthusiast. It features a bilingual interface (EN/DE), responsive design across four breakpoints, and an interactive UI.

---

## Features

* **Terminal-Inspired UI**: Clean, mono-spaced design featuring a command-line style header and ASCII art logo.
* **Bilingual Support (i18n)**: Fully integrated English and German translation system using a custom JavaScript implementation and data-i18n attributes.
* **Dynamic Navigation**: Interactive sidebar with a smart scroll-spy indicator that tracks the current section.
* **Responsive Architecture**: Four distinct CSS tiers for seamless viewing: PC, Laptop, Tablet, and Mobile.
* **Interactive Effects**: Features a radial mouse glow following the cursor and stylized project windows.

## Tech Stack

* **Frontend**: HTML5, CSS3 (Flexbox/Grid), Vanilla JavaScript.
* **Design**: Custom CSS variables for a dark, Tokyo Night-inspired color palette.
* **Icons**: SVG-based social icons and Skill Icons for tech stack visualization.

## Structure

* **index.html**: Main structure and language keys.
* **styles/**: Contains breakpoint-specific CSS files (PC, Laptop, Tablet, Mobile).
* **scripts/index.js**: Logic for translations, navigation indicators, and mouse effects.
* **images/**: Favicon and project screenshots.

## Customization

### Adding Translations
To add or modify text, update the translations object in scripts/index.js. Ensure the data-i18n attribute in the HTML matches the key in the JavaScript object.

## License
This project is open-source. Feel free to use it as a template for your own terminal-style portfolio. I don't care.