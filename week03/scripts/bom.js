const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    listItem.textContent = item;
    deleteButton.textContent = '❌';
    listItem.append(deleteButton);
    list.append(listItem);
    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
        input.focus();
        deleteChapter(listItem.textContent);
    });
};

button.addEventListener('click', () => {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus ();
    }
    else {
        input.focus();
		input.setAttribute('placeholder', 'Please enter book and chapter');
    };
});

function setChapterList() {
    localStorage.setItem('list', JSON.stringify(chaptersArray));
};

function getChapterList() {
    return JSON.parse(localStorage.getItem('list'));
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
};