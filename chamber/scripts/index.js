// Banner
const day = new Date().getDay();
if (day !== 1 && day !== 2 && day !== 3) {
    document.querySelector('.banner').style.display = "none";
}
const closeButton = document.querySelector('.close-banner');
closeButton.addEventListener('click', () => {
    document.querySelector('.banner').style.display = "none";
})

// Weather

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.createElement('img');
const forecastContainer = document.querySelector('#forecast');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=33.25&lon=-111.64&units=imperial&appid=a8bc13a741d274988e6ad3be4e09d187";
const url2 = "https://api.openweathermap.org/data/2.5/forecast?lat=33.25&lon=-111.64&units=imperial&appid=a8bc13a741d274988e6ad3be4e09d187";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function apiFetch2() {
    try {
        const response2 = await fetch(url2);
        if (response2.ok) {
            const data2 = await response2.json();
            displayForecast(data2.list);
        } else {
            throw Error(await response2.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
apiFetch2();

function displayResults(data) {
    let desc = data.weather[0].description;
    currentTemp.innerHTML = `<u>Today in Queen Creek:</u>\n\n${data.main.temp}&deg;F and ${desc}`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    figure = document.querySelector('#weather-icon');
    figure.appendChild(weatherIcon);
    
}

function displayForecast(forecasts) {    
    
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    forecastContainer.innerHTML = '';

    const seenDays = new Set();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    forecasts.forEach(forecast => {
        const date = new Date(forecast.dt * 1000);
        
        if (date >= tomorrow) {
            const dayOfWeek = date.getDay();
        
            if (!seenDays.has(dayOfWeek) && seenDays.size < 3) {
                seenDays.add(dayOfWeek);
                const day = weekday[dayOfWeek];
                const temp = `${forecast.main.temp}&deg;F`;
                const desc = forecast.weather[0].description;
                const iconsrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

                forecastContainer.innerHTML += `
                <div class="forecast-day">
                    <p>${day} ${temp} ${desc}</p>
                    <img src="${iconsrc}" alt="${desc}" class="forecast-icon">
                </div>
                `;
            }
        }
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