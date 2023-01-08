const date = new Date();
const year = date.getFullYear();

document.querySelector("#currentYear").textContent = year;

const lastMod = document.lastModified;
document.querySelector("#lastMod").textContent = lastMod;