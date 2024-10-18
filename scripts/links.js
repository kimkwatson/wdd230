const baseURL = "https://kimkwatson.github.io/wdd230";
const linksURL = ".data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    const list = document.querySelector('.activites ul');
    weeks.forEach((week) =>  {
        let listItem = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = week.links.title;
        link.setAttribute('href', week.links);
        listItem.textContent = `Week ${week.week}`;
        list.appendChild(listItem);
        listItem.appendChild(link);
    });
};

getLinks();