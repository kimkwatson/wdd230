// Hamburger Menu

const hamburger = document.querySelector('#hamButton');
const navigation = document.querySelector('#animateMe');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
})

// Visits

const visitsDisplay = document.querySelector('.visits');
const totalVisits = document.querySelector('.total');

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

// Directory

const url = "https//:kimkwatson.github.io/wdd230/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {
        const card = document.createElement('section').id = "memberCard";
        const business = document.createElement('h2').id = "businessName";
        const address = document.createElement('p').id = "businessAddress";
        const phone = document.createElement('p').id = "businessPhone";
        const website = document.createElement('p').id = "businessWebsite";
        const logo = document.createElement('img').id = "businessLogo";

        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', member.name);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '340');
        logo.setAttribute('height', '440');
        business.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.textContent = member.website;

        card.appendChild(business);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(logo);

        cards.appendChild(card);
    });
}