// Hamburger Menu

const hamburger = document.querySelector('#hamButton');
const navigation = document.querySelector('#animateMe');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
})

// Weather

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const forecastContainer = document.querySelector('#forecast');

const url = "https://api.openweathermap.org/data/2.5/onecall?lat=33.25&lon=-111.64&units=imperial&appid=811002c5f4b0fae224f775a8b2e67327";
const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?lat=33.25&lon=-111.64&appid=811002c5f4b0fae224f775a8b2e67327";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        const response2 = await fetch(forecasturl);
        if (response2.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data.daily.slice(1, 4));
        } else {
            throw Error(await response.text());
        }
    }
    } catch (error) {
        console.log(error);
    }

}

apiFetch();

function displayResults(data) {
    let desc = data.weather[0].description;
    currentTemp.innerHTML = `Today in Queen Creek:\n\n${data.main.temp}&deg;F and ${desc}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}

function displayForecast(forecasts) {
    
    forecastContainer.innerHTML = '';

    forecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        const temp = `${forecast.temp.day}&deg;F`;
        const desc = forecast.weather[0].description;
        const iconsrc = `https//openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
    
        const forecastDiv = document.createElement('div');
        forecastDiv.innerHTML = `<p>${date} ${temp} ${desc}</p><br><img src="${iconsrc}" alt="${desc}">`;
    
        forecastContainer.appendChild(forecastDiv);
    });
}

// Spotlights

document.addEventListener("DOMContentLoaded", () => {
    const url = "data/members.json";

    async function displaySpotlights() {
            const response = await fetch(url);
            const data = await response.json();
        
            const currentSpotlights = getSpotlights(data.members, 3);

        document.querySelector("#sl1").appendChild(createItem(currentSpotlights[0]));
        document.querySelector("#sl2").appendChild(createItem(currentSpotlights[1]));
        document.querySelector("#sl3").appendChild(createItem(currentSpotlights[2]));
    }

    function getSpotlights(array, n) {
        const filteredArray = array.filter(item => item.membership === 'silver' || item.membership === 'gold');
        const shuffled = [...filteredArray].sort(() => 0.5 - Math.random());
        return shuffled.slice(0,n);
    }

    function createItem(item) {
        spotlight = document.createElement('div');
        logo = document.createElement('img');
        business = document.createElement('p');
        business.textContent = `${item.name}\n${item.website}`;
        logo.setAttribute('src', item.logo);
        logo.setAttribute('alt', item.name);
        logo.setAttribute('width', '250');
        logo.setAttribute('height', '150');
        
        spotlight.appendChild(logo);
        spotlight.appendChild(business);
        return spotlight;
    }

    displaySpotlights();
    });

// Visits
document.addEventListener("DOMContentLoaded", () => {
    
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
})

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

