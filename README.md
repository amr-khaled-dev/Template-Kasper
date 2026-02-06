# Template-Kasper — One Page Creative Template

Kasper is a clean, responsive, one-page HTML/CSS template adapted from a free PSD design. This repository contains the converted HTML, styles, images and a small JavaScript file for basic interactions.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## Features

- Modern & minimal one-page layout
- Fully responsive (mobile → desktop)
- Easy to customize via CSS variables in `css/kasper.css`
- Includes Font Awesome icons and Google Fonts
- Lightweight, static-only — ready to deploy on any static host

## Sections

- Header (navigation, logo)
- Landing (hero with background and bullets)
- Services
- Design / Features
- Portfolio (filterable)
- Video section
- About
- Stats / Testimonials / Skills
- Pricing
- Subscribe / Contact
- Footer

## Project Structure

```
Template-Kasper/
├── index.html           # Main HTML file
├── css/
│   ├── kasper.css       # Main stylesheet
│   ├── normalize.css    # CSS reset
│   └── all.min.css      # Font Awesome
├── js/
│   └── main.js          # Small interaction scripts
├── images/              # Image and media assets
├── webfonts/            # Optional font files
└── README.md            # This file
```

## Technologies Used

- HTML5 — semantic markup
- CSS3 — variables and responsive media queries
- Font Awesome — icons
- Google Fonts — typography
- Vanilla JavaScript — simple UI interactions

## CSS Variables

The template uses CSS custom properties for easy color and spacing updates. See the top of `css/kasper.css` for variables such as `--main-color` and `--section-padding`.

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in your browser, or serve the folder with a static server:

```bash
python -m http.server 8000
# or
npx http-server -p 8000
```

## Customization

- Change primary colors and spacing in `css/kasper.css` (root variables).
- Edit content and sections in `index.html` to fit your project.
- Replace images in `images/` with your own assets.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 991px
- Desktop: 992px - 1199px
- Large Desktop: ≥ 1200px

## Dependencies

- [Font Awesome](https://fontawesome.com/) — icons (provided as `all.min.css`)
- [Google Fonts](https://fonts.google.com/) — fonts loaded from fonts.googleapis.com

## Credits

Design adapted from a free PSD template on Graphberry:

https://www.graphberry.com/item/kasper-one-page-psd-template

Please refer to the original Graphberry listing for the PSD and the original author's usage terms.

## License

This repository does not include a license by default. If you plan to publish the project, consider adding a `LICENSE` (for example, MIT) and ensure compliance with the original template terms.

## Contributing

Contributions are welcome. Typical workflow:

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Open a Pull Request

## Contact

Open an issue on GitHub for questions or support.

---

Made with ❤️ — adapted for Template-Kasper
