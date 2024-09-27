const hamburger = document.querySelector('#hamButton');
const navigation = document.querySelector('#animateMe');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
})

const modeButton = document.querySelector("#modeButton");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    main.classList.toggle('dark');
});