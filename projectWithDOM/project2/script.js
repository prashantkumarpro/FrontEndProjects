
let ftrLove = document.querySelectorAll('.ftr-love');
let likedLove = document.querySelectorAll('#liked-love');
let instaLoveBtn = document.querySelectorAll('#solid-heart');



let postImgs = document.querySelectorAll('.mid');

postImgs.forEach(e => {

    e.childNodes[3].addEventListener('dblclick', () => {
        instaLoveBtn.forEach((e, key) =>{
            e.style.opacity = 1;
            console.log(`key1 : ${key}`)
        })
       
        console.log('hello')

        setTimeout(function () {
          instaLoveBtn.forEach(e => {
            console.log(e.tagName)
          })
            ftrLove.forEach((e, key) => {
                e.style.display = "none"
                console.log(key)
            })
            
            // likedLove.style.display = "block"
        }, 2000)
    })
})



likedLove.forEach(e => {
    e.addEventListener('click', () => {
        ftrLove.style.display = "block"
        likedLove.style.display = "none"
    })
})

