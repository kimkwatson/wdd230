const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
})

const modeButton = document.querySelector('#darkButton');
const main = document.querySelector("main");

modeButton.addEventListener('click', () => {
    main.classList.toggle('dark');
})