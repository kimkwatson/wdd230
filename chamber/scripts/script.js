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

let visits = Number(window.localStorage.getItem('numVisits-ls')) || 0;
totalVisits.textContent = `Total Visits: ${visits}`;

let storedDate = localStorage.getItem("storedDateKey");
const lastVisit = new Date(storedDate);
const today = new Date();
const milliseconds = today - lastVisit;
const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));

const todayFormatted = today.toISOString().split('T')[0];
const lastVisitFormatted = lastVisit.toISOString().split('T')[0];

if (visits !== 0) {
    if (days === 0) {
        visitsDisplay.textContent = "Back so soon! Awesome!"
    } else {
        if (days === 1) {
            visitsDisplay.textContent = `You last visited ${days} day ago`;
        } else {
            visitsDisplay.textContent = `You last visited ${days} days ago`;
        }
    }
} else {
    visitsDisplay.textContent = "Welcome! Let us know if you have any questions";
}

visits++;
localStorage.setItem('numVisits-ls', visits);
localStorage.setItem('storedDateKey', today.toISOString().split('T')[0]);