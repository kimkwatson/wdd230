const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value !== '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        listItem.innerHTML = input.value;
        deleteButton.textContent = '❌';
        listItem.append(deleteButton);
        list.append(listItem);
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
            input.focus();
        });
        input.focus();
        input.value = '';
								input.setAttribute('placeholder', '');
				}
    else {
        input.focus();
								input.setAttribute('placeholder', 'Please enter book and chapter');
        //placeholder.append('Must Enter Book and Chapter);
    }
});