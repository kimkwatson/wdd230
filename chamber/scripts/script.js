// Hamburger Menu

const hamburger = document.querySelector('#hamButton');
const navigation = document.querySelector('#animateMe');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
})

// Visits
document.addEventListener("DOMContentLoaded", () => {
    
    const visitsDisplay = document.querySelector('.visits');
    const totalVisits = document.querySelector('.total');
    console.log(totalVisits);

    let visits = Number(window.localStorage.getItem('numVisits-ls')) || 1;
    totalVisits.textContent = `Total Visits: ${visits}`;

    let storedDate = localStorage.getItem("storedDateKey");
    const lastVisit = storedDate ? new Date(storedDate) : null;
    const today = new Date();

    let days = lastVisit ? Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24)) : 0;

    if (visits === 0) {
        visitsDisplay.textContent = "Welcome! Let us know if you have any questions";
    } else if (days === 0) {
        visitsDisplay.textContent = "Back so soon! Awesome!";
    } else {
        if (days === 1) {
            visitsDisplay.textContent = `You last visited ${days} day ago`;
        } else {
            visitsDisplay.textContent = `You last visited ${days} days ago`;
        }
    }

    visits++;
    localStorage.setItem('numVisits-ls', visits);
    localStorage.setItem('storedDateKey', today.toISOString().split('T')[0]);
})


// Directory

// Cards

document.addEventListener("DOMContentLoaded", () => {
    const url = "https://kimkwatson.github.io/wdd230/chamber/data/members.json";
    const cards = document.querySelector('#cards');

    console.log("DOMContentLoaded event fired");
    console.log("Cards element", cards);

    async function getMemberData() {
        if (!cards) {
            console.error("No element with id 'cards' found.");
            return;
        }
        
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.table(data.members);
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

