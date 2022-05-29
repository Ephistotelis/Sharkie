class Barrier extends MovableObject {
    x = 100 + Math.random() * 200;
    width = 300;
    height = 200;
    constructor() {
        super().loadImage('img/3. Background/Barrier/2.png')
    }
}