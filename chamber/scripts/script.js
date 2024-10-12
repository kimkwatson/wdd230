const hamburger = document.querySelector('#hamButton');
const navigation = document.querySelector('#animateMe');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburger.classList.toggle('open');
})