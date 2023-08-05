// get all the elements
let hamButton = document.querySelector('.ham-button');
let navElement = document.querySelector('.nav-links');



// hide the cross button
document.querySelector('.ham_close').style.display = "none";


// call the ham button
hamButton.addEventListener('click', () => {

    navElement.classList.toggle('active');

    if (document.querySelector('.nav-links').classList.contains('active')) {
        document.querySelector('.ham_menu').style.display = 'none';
        document.querySelector('.ham_close').style.display = 'inline';
    } else {
        document.querySelector('.ham_menu').style.display = 'inline';
        document.querySelector('.ham_close').style.display = 'none';
    }

})

// rendering ul when clicked on the links
let li = document.querySelectorAll('li');
li.forEach((link) => {
    link.addEventListener('click', () => {
        navElement.classList.toggle('active');

        document.querySelector('.ham_menu').style.display = 'inline';
        document.querySelector('.ham_close').style.display = 'none';
    })
})


// typed JavaScript
var typed = new Typed(".input", {
    strings: ["front end developer", "Web Developer", "UX Designer"],
    typedSpeed: 70,
    backSpeed: 55,
    loop: true
})



// form validation 
let userName = document.getElementById('name').value;
let userRegex = /[a-zA-Z]/;

document.querySelector('.btn').addEventListener("click", () => {
    if (userName = !userRegex.test(userName)) {
        alert('enter a valid name')
        return false;
    } else {
        console.log("Your name is valid")
        return true;
    }
})

