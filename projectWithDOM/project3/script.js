const main = document.querySelector('.main');
let cursor = document.querySelector('.cursor');
main.addEventListener('mousemove', function (dets) {
    console.log(dets.x + 'px ' + dets.y + 'px ')
    cursor.style.left = dets.x + 'px';
    cursor.style.top = dets.y + 'px';
})