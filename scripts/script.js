const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})

const modeButton = document.querySelector("#modeButton");
const body = document.querySelector("body");
const main = document.querySelector("main");

modeButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    main.classList.toggle('dark');
});