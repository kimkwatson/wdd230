const hamburger = document.querySelector('#hamButton');
const navigation = document.querySelector('#animateMe');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
})

const modeButton = document.querySelector("#modeButton");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    main.classList.toggle('dark');
});

const visitsDisplay = document.querySelector('.visits');

let visits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (visits !== 0) {
    visitsDisplay.textContent = visits;
}
else {
    visitsDisplay.textContent = `This is your first visit - Welcome!`;
}

visits++;
localStorage.setItem('numVisits-ls', visits);