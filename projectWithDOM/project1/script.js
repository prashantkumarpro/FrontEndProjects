const btn = document.querySelector('#add');
let check = 0;
btn.addEventListener("click", function () {
    if (check == 0) {
        btn.innerHTML = "Remove Friend"
        let h3 = document.querySelector('h3');
        h3.innerHTML = "Friends"
        h3.style.color = "green"
        check = 1;
    } else {
        btn.innerHTML = "Add Friend"
        let h3 = document.querySelector('h3');
        h3.innerHTML = "Stranger"
        h3.style.color = "red"
        check = 0;
    }
})