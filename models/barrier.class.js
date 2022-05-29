class Barrier extends MovableObject {
    x = 720;
    width = 300;
    height = 200;
    speed = 1.5;


    constructor(image) {
        super().loadImage('img/3. Background/Barrier/2.png')
        this.flowLeft();
    }

    stopMove() {

    }
}