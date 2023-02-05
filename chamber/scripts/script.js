function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
    document.getElementById('hamburgerBtn').classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;

const date = document.querySelector(".date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {dateStyle: "full"}).format(now);
date.innerHTML = `${fulldate}`;

/*Copyright date*/
const year = now.getFullYear();

document.querySelector("#currentYear").textContent = year;

/*Last modified date*/
const lastMod = document.lastModified;
document.querySelector("#lastMod").textContent = lastMod;