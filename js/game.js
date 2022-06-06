let canvas;
let ctx; //ctx = context
let keyboard = new KeyboardObject();
let world;
let gamestart = false;
let endscreen;
let startBtn;
let fullScreenBtn;
let retryBtn;
let instructions;
let instructionsPage;

function init() {
    canvas = document.getElementById('canvas')
    endscreen = document.getElementById('endScreen')
    startBtn = document.getElementById('startBtn')
    fullScreenBtn = document.getElementById('fullScreenBtn')
    retryBtn = document.getElementById('retryBtn')
    instructions = document.getElementById('instructions')
    instructionsPage = document.getElementById('instructionPages')
    renderTemplate(1);
}

function startGame() {
    if (gamestart === false) {
        gamestart = true;
        canvas.style.display = 'block';
        startBtn.style.display = 'none';
        fullScreenBtn.style.display = 'none';
        instructions.style.display = 'none';
        instructionsPage.style.display = 'none';
        world = new World(canvas, keyboard);
        console.log(world);
        endScreen();
    }

}

function endScreen() {
    setInterval(() => {
        if (world.gameActiv == false) {
            canvas.style.display = 'none';
            endscreen.style.display = 'block';
            retryBtn.style.display = 'block'
        }
    }, 100);
}

function retry() {
    window.location.reload()
}
/* document.addEventListener('click', (event) => {
    if (event.pointerId == 1) {
        keyboard.ATTACK = true;
    }
}) */
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

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}