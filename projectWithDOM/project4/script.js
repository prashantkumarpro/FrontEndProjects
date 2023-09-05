const elem = document.querySelectorAll('.elem');
console.log(elem)
elem.forEach(function (e) {
    console.log(e.childNodes[3])

    e.addEventListener('mousemove', function (dets) {
        e.childNodes[3].style.left = dets.x + 'px'
        
    })
    e.addEventListener('mouseenter', (dets) => {

        console.log(dets.x + 'px' + dets.y + 'px')
        e.childNodes[3].style.opacity = 1



    })
    e.addEventListener('mouseleave', (dets) => {

        console.log(dets.x + 'px' + dets.y + 'px')
        e.childNodes[3].style.opacity = 0



    })
})