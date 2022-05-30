let canvas;
let ctx; //ctx = context
let keyboard = new KeyboardObject();
let world;

function init() {
    canvas = document.getElementById('canvas')
    world = new World(canvas, keyboard)


    console.log(world)


}

document.addEventListener('keydown', (event) => {
    //                                                                                                                              multi consollogs
    console.log(event)
    console.log(event['code'])
    console.log(event['keyCode'])

    if (event.keyCode == 38 || event.keyCode == 87) {
        keyboard.UP = true;
        console.log(keyboard.UP)
    }
    if (event.keyCode == 39 || event.keyCode == 68) {
        keyboard.RIGHT = true;
        console.log(keyboard.RIGHT)
    }
    if (event.keyCode == 40 || event.keyCode == 83) {
        keyboard.DOWN = true;
        console.log(keyboard.DOWN)
    }
    if (event.keyCode == 37 || event.keyCode == 65) {
        keyboard.LEFT = true;
        console.log(keyboard.LEFT)
    }
    console.log('--------------')
})

document.addEventListener('keyup', (event) => {

    console.log(event)
    console.log(event['code'])
    console.log(event['keyCode'])

    if (event.keyCode == 38 || event.keyCode == 87) {
        keyboard.UP = false;
        console.log(keyboard.UP)
    }
    if (event.keyCode == 39 || event.keyCode == 68) {
        keyboard.RIGHT = false;
        console.log(keyboard.RIGHT)
    }
    if (event.keyCode == 40 || event.keyCode == 83) {
        keyboard.DOWN = false;
        console.log(keyboard.DOWN)
    }
    if (event.keyCode == 37 || event.keyCode == 65) {
        keyboard.LEFT = false;
        console.log(keyboard.LEFT)
    }
    console.log('--------------')
})