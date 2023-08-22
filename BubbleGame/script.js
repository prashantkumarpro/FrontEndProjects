let timer = 5;
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
            document.querySelector('#bubble-page').innerHTML = `<h1>Game Over </h1>`;
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
    document.querySelector('#bubble-page').innerHTML = clutter;
}


function getnewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#hitval').textContent = hitrn;
}


function increaseScore() {
    score += 10;
    document.querySelector('#scoreval').innerHTML = score;
}

let totalHitval = [];
let totalHit = document.querySelector('#total-hit');

let totalCorrectHitVal = [];
let totalCorrectHit = document.querySelector('#correct-hit');

let totalInCorrectHitVal = [];
let totalInCorrectHit = document.querySelector('#incorrect-hit');

document.querySelector('#bubble-page')
    .addEventListener("click", function (e) {

        let bubble = Number(e.target.textContent);
        totalHitval.push(bubble)
        totalHit.innerHTML = totalHitval.length;
        if (bubble === hitrn) {
            totalCorrectHitVal.push(bubble);
            totalCorrectHit.innerHTML = totalCorrectHitVal.length;
            increaseScore()
            makeBubble()
            getnewHit()
        } else {
            if (bubble != hitrn) {
                totalInCorrectHitVal.push(bubble);
                totalInCorrectHit.innerHTML = totalInCorrectHitVal.length;

            }
        }
    })

// Define the restartGame function
function restartGame() {
    score = 0;
    timer = 5; // Reset the timer
    document.querySelector('#scoreval').innerHTML = score;
    runTimer(); // Start the timer again
    makeBubble(); // Generate new bubbles
    getnewHit(); // Get a new hit number
}

let restart = document.querySelector('#restart');
console.log(restart)
restart.addEventListener('click', function () {
    document.querySelector('.result-container').style.display = 'none'
    restartGame()
    totalHit.innerHTML = '0';
    totalInCorrectHit.innerHTML = '0';
    totalCorrectHit.innerHTML = '0';
})





getnewHit()
runTimer()
makeBubble()

