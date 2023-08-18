let timer = 60;
let hitrn = 0;
let score = 0;

// runtimer 
function runTimer() {

    let timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#timerval').textContent = timer;
        } else {
            clearInterval(timerInt);
            document.querySelector('#pbotom').innerHTML = 'game over';
            document.querySelector('.result-container').style.display = 'block'

        }

    }, 1000)
}


// make bubble
function makeBubble() {
    let clutter = '';
    for (let i = 1; i < 393; i++) {

        let rn = Math.floor(Math.random() * 10);
        clutter += ` <div class="bubble">${rn}</div>`
    }
    document.querySelector('#pbotom').innerHTML = clutter;
}


function getnewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn;
}


function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').innerHTML = score;
}

document.querySelector('#pbotom')
    .addEventListener("click", function (e) {
        let bubblee = Number(e.target.textContent);
        if (bubblee === hitrn) {
            increaseScore()
            makeBubble()
            getnewHit()
        } else {
            console.log('hit the correct number')

        }
    })

// Define the restartGame function
function restartGame() {

    timer = 60; // Reset the timer
    runTimer(); // Start the timer again
    makeBubble(); // Generate new bubbles
    getnewHit(); // Get a new hit number
}

let restart = document.querySelector('#restart');
console.log(restart)
restart.addEventListener('click', function () {
    document.querySelector('.result-container').style.display = 'none'
    restartGame()
})

getnewHit()
runTimer()
makeBubble()

