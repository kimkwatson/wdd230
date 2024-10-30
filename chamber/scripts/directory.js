// Directory

// Cards

document.addEventListener("DOMContentLoaded", () => {
    const url = "https://kimkwatson.github.io/wdd230/chamber/data/members.json";
    const cards = document.querySelector('#cards');

    async function getMemberData() {
        if (!cards) {
            console.error("No element with id 'cards' found.");
            return;
        }
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            displayMembers(data.members);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function displayMembers (members) {
        members.forEach(member => {
            const card = document.createElement('section');
            card.setAttribute('id', 'memberCard');
            const logo = document.createElement('img');
            logo.setAttribute('id', 'businessLogo');
            logo.setAttribute('src', member.logo);
            logo.setAttribute('alt', member.name);
            logo.setAttribute('loading', 'lazy');
            logo.setAttribute('width', '250');
            logo.setAttribute('height', '155');
            const business = document.createElement('h2');
            business.setAttribute('id', 'businessName');
            const address = document.createElement('p');
            address.setAttribute('id', 'businessAddress');
            const phone = document.createElement('p');
            phone.setAttribute('id', 'businessPhone');
            const website = document.createElement('p');
            website.setAttribute('id', 'businessWebsite');
            business.textContent = member.name;
            address.textContent = member.address;
            phone.textContent = member.phone;
            website.textContent = member.website;

            card.appendChild(logo);
            card.appendChild(business);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(website);

            cards.appendChild(card);
        });
    }

    getMemberData();
});

// Buttons

const gridButton = document.querySelector('#gridView');
const listButton = document.querySelector('#listView');
const cards = document.querySelector("#cards");

listButton.addEventListener('click', () => {
    cards.classList.remove('grid');
    cards.classList.add('list');
});

gridButton.addEventListener('click', () => {
    cards.classList.remove('list');
    cards.classList.add('grid');
});

