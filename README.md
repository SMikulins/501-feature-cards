<?php foreach ($cards as $card) : ?>
    <article class="card theme-<?php echo esc_attr($card['theme']); ?>">
        <div class="card-content">
            <p><?php echo esc_html($card['top_label']); ?></p>
            <h2 class="hero"><?php echo esc_html($card['value']); ?></h2>
            <p><?php echo esc_html($card['bottom_label']); ?></p>
        </div>
        <div class="card-icon" data-icon="<?php echo esc_attr($card['image']); ?>" aria-hidden="true"></div>
    </article>
<?php endforeach; ?>