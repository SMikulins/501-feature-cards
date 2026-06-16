# Feature Cards / CTA Module
A reusable, accessible, responsive, CMS-agnostic Feature Cards / CTA module for a marketing landing page. Built with vanilla HTML, CSS, and JavaScript.

## Links
- **Live demo:** https://smikulins.github.io/501-feature-cards/
- **Repository:** https://github.com/SMikulins/501-feature-cards

## Features
- Semantic, accessible HTML (`<section>`, `<article>`, headings, ARIA labels)
- Responsive grid (3 → 2 → 1 columns)
- Theme variants via CSS classes (`theme-green`, `theme-pink`, `theme-blue`)
- Icons loaded from `assets/img/{name}.svg` via `data-icon`
- No dependencies — works as static files

## Integration
- Link `css/style.css` for layout, themes, and typography (fonts in `assets/fonts/`)
- Include `js/cards.js` before `</body>` to inject SVG icons from `data-icon`

## Run locally
1. Clone the repo
```bash
git clone https://github.com/SMikulins/501-feature-cards.git
cd 501-feature-cards
```

2. Run a local server:
```bash
npx --yes live-server
```

3. Open at http://127.0.0.1:8080

## WordPress Example
```php
<?php foreach ($cards as $card) : ?>
    <article
        class="card theme-<?php echo esc_attr($card['theme']); ?>"
        aria-label="<?php echo esc_attr($card['top_label'] . ' ' . $card['value'] . ' ' . $card['bottom_label']); ?>"
    >
        <div class="card-content">
            <p><?php echo esc_html($card['top_label']); ?></p>
            <h3 class="hero"><?php echo esc_html($card['value']); ?></h3>
            <p><?php echo esc_html($card['bottom_label']); ?></p>
        </div>
        <div class="card-icon" data-icon="<?php echo esc_attr($card['image']); ?>" aria-hidden="true"></div>
    </article>
<?php endforeach; ?>
```