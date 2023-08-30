

const postContainer = document.querySelectorAll('.post-container');
postContainer.forEach(function (elem) {
    // console.log(elem.childNodes[5].childNodes[1].childNodes[1].childNodes[3])
    let solidHeart = elem.childNodes[3].childNodes[1];
    let footerLove = elem.childNodes[5].childNodes[1].childNodes[1].childNodes[1];
    
    let likedLove = elem.childNodes[5].childNodes[1].childNodes[1].childNodes[3];

    elem.childNodes[3].childNodes[3].addEventListener('dblclick', function () {
        solidHeart.style.opacity = 1;
        solidHeart.style.transform = 'translate(-50%, -50%) scale(1)';

        setTimeout(() => {
            solidHeart.style.opacity = 0;
            footerLove.style.display = 'none'
            likedLove.style.display = 'block'
            // solidHeart.style.transform = 'translate(-50%, -50%) scale(0)

        }, 1000);
        setTimeout(() => {

            solidHeart.style.transform = 'translate(-50%, -50%) scale(0)';
            solidHeart.style.transition = 'transform ease 0.2s';

        },1000);
    });

    footerLove.addEventListener('click', function () {
        console.log('hello')
        footerLove.style.display = 'none'
        likedLove.style.display = 'block'
    });

    likedLove.addEventListener('click', function () {
        footerLove.style.display = 'block'
        likedLove.style.display = 'none'
    });
});

