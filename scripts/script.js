// Hamburger Menu

const hamburger = document.querySelector('#hamButton');
const navigation = document.querySelector('#animateMe');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
})

// Mode Button

const modeButton = document.querySelector("#modeButton");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    main.classList.toggle('dark');
});

// Visits

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

// Weather

const icon = document.querySelector('#icon');
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#description');

const myKey = "a8bc13a741d274988e6ad3be4e09d187";
const latitude = 33.25;
const longitude = -111.64;

const url = `//api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${myKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

function displayResults(data) {
    description.innerHTML = data.weather[0].description;
    temperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', data.weather[0].description);
}

apiFetch();