const blogsDiv = document.querySelector('#blogs');
const backButton = document.querySelector("#back");
// loads blogs from localStorage and creates elements to display them on the page
function loadBlogs() {
    let blogs = JSON.parse(localStorage.getItem('blogs'));
    console.log(blogs);

    if (blogs) {
        blogs.forEach(blog => {
            const div = document.createElement('div');
            div.classList.add('blog-post');
            div.setAttribute('id', 'blog-post');
            const h3 = document.createElement('h3');
            h3.classList.add('title');
            const hr = document.createElement('hr');
            const p = document.createElement('p');
            p.classList.add('content');
            const p2 = document.createElement('p');
            p2.classList.add('author');

            h3.textContent = blog.title;
            p.textContent = blog.content;
            p2.textContent = `Posted by: ${blog.username}`;

            div.appendChild(h3);
            div.appendChild(hr);
            div.appendChild(p);
            div.appendChild(p2);

            blogsDiv.appendChild(div);
        });
    }
}


// back button to take you to the form page
backButton.addEventListener("click", () => {
    location.href = './index.html'
});

// calls the function to load the blogs when the user visits the page
window.onload = loadBlogs;


// toggles dark and light mode on the blogs page with the button
function toggleMode() {
    const body = document.querySelector('body');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const toggle = document.querySelector('#toggle');
    const blogs = document.querySelector('#blogs');
    const link = document.querySelector('#link');
    const back = document.querySelector('#back');
    body.classList.toggle('dark');
    header.classList.toggle('dark');
    main.classList.toggle('dark');
    toggle.classList.toggle('dark');
    blogs.classList.toggle('dark');
    link.classList.toggle('dark');
    back.classList.toggle('dark');



    if (toggle.textContent === "🌞") {
        toggle.textContent = "🌒";
    } else {
        toggle.textContent = "🌞";
    }

}


const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('click', toggleMode);