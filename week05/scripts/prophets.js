const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const date = document.createElement('p');
        const place = document.createElement('p');
        const portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');
        date.textContent = `Date of Birth: ${prophet.birthdate}`;
        place.textContent = `Place of Birth: ${prophet.birthplace}`;

        card.appendChild(fullName);
        card.appendChild(date);
        card.appendChild(place);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}