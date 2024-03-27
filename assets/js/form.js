const submitButton = document.getElementById('blog-form');
const card = document.querySelector('.card');
const msg = document.createElement('p');

// function captures the values from the form and stores them in an object
// the object is passed to the saveToStorage function then it changes the page to the blog.html
function saveFormData(event) {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const title = document.querySelector('#title').value;
    const comment = document.querySelector('#comment').value;

    if (
        !username ||
        !title ||
        !comment
    ) { 
        msg.textContent = "Please complete the form.";
        card.appendChild(msg);
        msg.setAttribute('style', 'color: red; text-align: center');
    
    } else {
       

    const userObj = {
        username: username,
        title: title,
        comment: comment
    }

    saveToStorage(userObj)
    location.href= './blog.html'
}
}
// this function recieves the object as userObj and then the object is pushed into the the storageData array
function saveToStorage(userObj) {
    let storageData = JSON.parse(localStorage.getItem('blogs')) || [];

    storageData.push(userObj)

    localStorage.setItem('blogs', JSON.stringify(storageData))
}


submitButton.addEventListener('submit', saveFormData);


