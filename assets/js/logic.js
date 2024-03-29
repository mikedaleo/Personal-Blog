// toggles dark and light mode on the form page with the button

function toggleMode() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const span = document.querySelector('span');
    const toggle = document.querySelector('#toggle');
    const submitButton = document.querySelector('#submit');
    const title = document.querySelector('#first-blog');
    const card = document.querySelector('#card');
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    main.classList.toggle('dark');
    span.classList.toggle('dark');
    toggle.classList.toggle('dark');
    submitButton.classList.toggle('dark');
    title.classList.toggle('dark');
    card.classList.toggle('dark');



    if (toggle.textContent === "🌞") {
        toggle.textContent = "🌒";
    } else {
        toggle.textContent = "🌞";
    }

}

const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', toggleMode);