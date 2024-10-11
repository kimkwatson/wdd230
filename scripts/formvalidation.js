const p1 = document.querySelector('#password1');
const p2 = document.querySelector('#password2');
const msg = document.querySelector('#message');

p1.addEventListener("input", restart)
p2.addEventListener('focusout', controlar);

function restart () {
    msg.textContent = '';
}

function controlar() {
    if (p1.value !== p2.value) {
        p1.value = '';
        p2.value = '';
        p1.focus();
        msg.textContent = "Passwords do not match. Please try again."
    }
    else {
        msg.textContent = '';
    }
}

function updateValue(value) {
    document.getElementById('currentValue').innerText = value;
}

asdf
