

let postContainer = document.querySelectorAll('.post-container');


postContainer.forEach(function (elem) {
    // console.log(elem.childNodes[5].childNodes[1].childNodes[1].childNodes[3])
    let solidHeart = elem.childNodes[3].childNodes[1];
    let footerLove = elem.childNodes[5].childNodes[1].childNodes[1].childNodes[1];
    console.log(footerLove.childNodes[0])
    let likedLove = elem.childNodes[5].childNodes[1].childNodes[1].childNodes[3];

    elem.childNodes[3].childNodes[3].addEventListener('dblclick', function () {
        solidHeart.style.opacity = 1;
        setTimeout(() => {
            solidHeart.style.opacity = 0;
            footerLove.style.display = 'none'
            likedLove.style.display = 'block'
        }, 3000);

        likedLove.addEventListener('click', function () {
            footerLove.style.display = 'block'
            likedLove.style.display = 'none'
        })
    })
})

