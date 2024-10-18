const baseURL = "https://kimkwatson.github.io/wdd230";
const linksURL = "https://kimkwatson.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) => {
    const list = document.querySelector('.activities ul');
    weeks.forEach((week) =>  {
        let listItem = document.createElement('li');
        listItem.textContent = `${week.week}:   `;
        list.appendChild(listItem);
        week.links.forEach(link => {
            let linkInfo = document.createElement('a');
            linkInfo.textContent = `   ${link.title}  |`;
            linkInfo.setAttribute('href', link.url);
            listItem.appendChild(linkInfo);
        })     
    });
};

getLinks();