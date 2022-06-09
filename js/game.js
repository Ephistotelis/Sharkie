let canvas;
let ctx; //ctx = context
let keyboard = new KeyboardObject();
let world;
let gamestart = false;
let endscreen;
let startBtn;
let retryBtn;
let fullscreenbtn;
let instructions;
let instructionsPage;
let scoreList = [];
/**
 * defines variables, load and render scoreboard
 */

function init() {
    canvas = document.getElementById('canvas')
    endscreen = document.getElementById('endScreen')
    startBtn = document.getElementById('startBtn')
    retryBtn = document.getElementById('retryBtn')
    fullscreenbtn = document.getElementById('fullScreenBtn')
    instructions = document.getElementById('instructions')
    instructionsPage = document.getElementById('instructionPages')
    renderTemplate(1);
    loadScore()
    renderScoreboard()
}

/**
 * starting the game by showing the canvas and initialize the world object
 */
function startGame() {
    if (gamestart === false) {
        gamestart = true;
        canvas.style.display = 'block';
        fullscreenbtn.style.display = 'block';
        startBtn.style.display = 'none';
        instructions.style.display = 'none';
        instructionsPage.style.display = 'none';
        world = new World(canvas, keyboard);
        console.log(world);
        endScreen();
    }

}

/**
 * shows endscreen by adding display style 
 */
function endScreen() {
    setInterval(() => {
        if (world.gameActiv == false) {
            canvas.style.display = 'none';
            endscreen.style.display = 'block';
            retryBtn.style.display = 'block'
        }
    }, 100);
}

/**
 * reloads the page/the game
 */
function retry() {
    window.location.reload()
}




/**
 * opens the element in fullscreenmode
 * @param {element} elem - selected element, in this case the canvas
 */


function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}
/**
 * saves the score in localstorage
 * @param {number} score - the score which is calculated in endGame()
 */

function addScoreToLS(score) {
    let endscore = score;
    scoreList.push(endscore)
    localStorage.setItem('Score', JSON.stringify(scoreList))
}

/**
 * 
 * loads the score from localstorage if existent
 */
function loadScore() {
    let LSscore = localStorage.getItem('Score')
    if (!LSscore) { return }
    let LSscoreJSON = JSON.parse(LSscore)
    scoreList = LSscoreJSON;
}
/**
 * renders scoreboard and add 1 template für each score in the array
 */

function renderScoreboard() {
    let scoreboard = document.getElementById('scores')
    scoreboard.innerHTML = ''
    for (let i = 0; i < scoreList.length; i++) {
        let score = scoreList[i]
        scoreboard.innerHTML += tempalateScoreBoard(i, score)
    }
}

/**
 *  clear the localstorage and scoreboard
 * 
 */
function clearScore() {
    localStorage.clear();
    scoreList = [];
    renderScoreboard();
}

/**
 * functions to recognice keyboard inputs and change variables in keyboard object
 * 
 * @param {event} event - getting keydown event infos
 * 
 */
document.addEventListener('keydown', (event) => {
    //multi consollogs
    /* console.log(event)
    console.log(event['code'])
    console.log(event['keyCode']) */

    if (event.keyCode == 38 || event.keyCode == 87) {
        keyboard.UP = true;
        //  console.log(keyboard.UP)
    }
    if (event.keyCode == 39 || event.keyCode == 68) {
        keyboard.RIGHT = true;
        // console.log(keyboard.RIGHT)
    }
    if (event.keyCode == 40 || event.keyCode == 83) {
        keyboard.DOWN = true;
        // console.log(keyboard.DOWN)
    }
    if (event.keyCode == 37 || event.keyCode == 65) {
        keyboard.LEFT = true;
        // console.log(keyboard.LEFT)
    }
    if (event.keyCode == 32) {
        keyboard.ATTACK = true;
    }
    // console.log('--------------')
})


document.addEventListener('keyup', (event) => {

    // console.log(event)
    // console.log(event['code'])
    // console.log(event['keyCode'])

    if (event.keyCode == 38 || event.keyCode == 87) {
        keyboard.UP = false;
        // console.log(keyboard.UP)
    }
    if (event.keyCode == 39 || event.keyCode == 68) {
        keyboard.RIGHT = false;
        // console.log(keyboard.RIGHT)
    }
    if (event.keyCode == 40 || event.keyCode == 83) {
        keyboard.DOWN = false;
        // console.log(keyboard.DOWN)
    }
    if (event.keyCode == 37 || event.keyCode == 65) {
        keyboard.LEFT = false;
        // console.log(keyboard.LEFT)
    }
    if (event.keyCode == 32) {
        keyboard.ATTACK = false;
    }
    // console.log('--------------')
})