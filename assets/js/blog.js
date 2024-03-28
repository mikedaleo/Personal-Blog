const blogsDiv = document.querySelector('#blogs');
const backButton = document.querySelector("#back");

function loadBlogs() {
    let blogs = JSON.parse(localStorage.getItem('blogs'));
    console.log(blogs);
    
    if (blogs) {
        blogs.forEach(blog => {
            const div = document.createElement('div');
            div.classList.add('blog-post');

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



backButton.addEventListener("click", () => {
    location.href = './index.html'
});

window.onload = loadBlogs;




//     for (let blog of blogs) {
//         let username = blog.username;
//         let title = blog.title;
//         let content = blog.content;

//  }




// function loadBlogs() {
//     let blog = JSON.parse(localStorage.getItem('blogs'));
//     console.log(blog);
//     if (blog) {
//         tempStorageObject = blog;
//         // tempStorageObject.blogs.forEach((blog) => {
//             for (let i = 0; i < blog.length; i++) {
//             const div = document.createElement('div');
//             const h3 = document.createElement('h3');
//             const p = document.createElement('p');
//             const p2 = document.createElement('p')
//             h3.textContent = blog.title;
//             p.textContent = blog.content;
//             p2.textContent = blog.username;
//             blogsDiv.appendChild(h3);
//             blogsDiv.appendChild(p);
//             blogsDiv.appendChild(p2);
//         } 
//     }

// }