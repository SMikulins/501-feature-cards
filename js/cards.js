(async () => {
    const icons = document.querySelectorAll('.card-icon[data-icon]');

    await Promise.all([...icons].map(async (icon) => {
        const name = icon.dataset.icon;
        const response = await fetch(`assets/img/${name}.svg`);

        if (!response.ok) {
            console.error(`Failed to load ${name}.svg`);
            return;
        }

        icon.innerHTML = await response.text();
    }));
})();