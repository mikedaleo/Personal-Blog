function toggleMode() {
    const darkMode = document.getElementById('dark');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const span = document.querySelector('span');
    const toggle = document.querySelector('#toggle');
    const submitButton = document.querySelector('#submit');
    const title = document.querySelector('#first-blog');
    const card = document.querySelector('#card');
    darkMode.classList.toggle('dark');
    header.classList.toggle('dark');
    main.classList.toggle('dark');
    span.classList.toggle('dark');
    toggle.classList.toggle('dark');
    submitButton.classList.toggle('dark');
    title.classList.toggle('dark');
    card.classList.toggle('dark');


    
    if (toggle.textContent === "Dark Mode") {
        toggle.textContent = "Light Mode";
    } else {
        toggle.textContent = "Dark Mode";
    }
   
}

const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', toggleMode);