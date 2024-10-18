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
        listItem.textContent = `Week ${week.week}: ${week.links.join(',')}`;
        list.appendChild(listItem);
    });
};

getLinks();