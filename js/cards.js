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

cards.forEach( async (card) => {
    const element = document.createElement('article');
    element.className = `card theme-${card.theme}`;
    const svg = await fetch(`assets/img/${card.image}.svg`).then(r => r.text());

    element.className = `card theme-${card.theme}`;
    element.innerHTML = `
        <div class="card-content ">
            <p>${card.top_label}</p>
            <p class="hero">${card.value}</p>
            <p>${card.bottom_label}</p>
        </div>
        
        ${svg}
    `;

    container.appendChild(element);
});