const date = new Date();
console.log(document.getElementById("year").innerHTML = date.getFullYear());

let modified = document.lastModified;
console.log(document.getElementById("lastModified").innerHTML = modified);

/* Join Page Timestamp */

document.querySelector('#date').innerHTML = date;