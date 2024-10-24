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