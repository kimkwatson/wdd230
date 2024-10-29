// Banner

const closeButton = document.querySelector('.close-banner');
closeButton.addEventListener('click', () => {
    document.querySelector('.banner').style.display = "none";
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
            const data2 = await response.json();
            console.log(data);
            displayForecast(data2.daily.slice(1, 4));
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
    let desc = data.current.weather[0].description;
    currentTemp.innerHTML = `Today in Queen Creek:\n\n${data.current.temp}&deg;F and ${desc}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
}

function displayForecast(forecasts) {
    
    forecastContainer.innerHTML = '';

    forecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        const temp = `${forecast.main.temp}&deg;F`;
        const desc = forecast.weather[0].description;
        const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;
    
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