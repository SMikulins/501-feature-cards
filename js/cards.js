const cards = [
    {
        theme: "green",
        top_label: "More than",
        value: "£12,000,000",
        bottom_label: "delighted guests",
        image: "hands"
    },
    {
        theme: "pink",
        top_label: "Find us in",
        value: "50",
        bottom_label: "countries",
        image: "globe"
    },
    {
        theme: "blue",
        top_label: "Over",
        value: "800,000,000",
        bottom_label: "darts thrown",
        image: "dart"      
    }
];

const container = document.querySelector('.cards');

(async () => {
    if (!container) return;

    const elements = await Promise.all(cards.map(async (card) => {
        const response = await fetch(`assets/img/${card.image}.svg`);
        if (!response.ok) throw new Error(`Failed to load ${card.image}.svg`);
        const svg = await response.text();
        const element = document.createElement('article');
        element.className = `card theme-${card.theme}`;
        element.innerHTML = `
            <div class="card-content">
                <p>${card.top_label}</p>
                <h2 class="hero">${card.value}</h2>
                <p>${card.bottom_label}</p>
            </div>
            
            <div class="card-icon" aria-hidden="true">${svg}</div>
        `;
        return element;
    }));

    elements.forEach((element) => container.appendChild(element));
})();