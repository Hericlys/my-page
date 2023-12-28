// menu animation

const headerMenu = document.querySelector('[data-header="menu"]')

function AnimateMenuScroll() {
    const windowTop = window.pageYOffset;
    if (windowTop > 0) {
        headerMenu.classList.add('menu-shadow')
    }
    else {
        headerMenu.classList.remove('menu-shadow')
    }
}

window.addEventListener('scroll', function() {
    AnimateMenuScroll();
})

// ============================================================================


function submitForm(id) {
    let form = document.getElementById(id);
    form.submit();
}

function deletSearch() {
    let search = document.getElementById('search');
    search.value = ''
    submitForm('form_filter')
}

function sendSearch() {
    submitForm('form_filter')
}


const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () =>
menu.classList.toggle("active"));

hamburger.addEventListener("click", () =>
hamburger.classList.toggle("active"));

const classElement = ".dynamic-text";
const messages = [
    "Especialista em python",
    "Desenvolvedor de jogos com C#",
    "Ilustrador e modelador",
    "Animador 2D e 3D"
];
const interval = 150;
const el = document.querySelector(classElement);

let messageIndex = 0;
let characterIndex = 0;
let currentMessage = '';
let currentCharacters = '';

const typer = () => {
    if (messageIndex === messages.length) {
        messageIndex = 0;
    }

    currentMessage = messages[messageIndex];
    currentCharacters =currentMessage.slice(0, characterIndex++)
    el.textContent = currentCharacters;

    if (currentCharacters.length === currentMessage.length) {
        messageIndex++;
        characterIndex = 0;
    }
}

setInterval(typer, interval)