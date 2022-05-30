class Background extends BackgroundObject {
    x = 0;
    y = 0;
    width = 720;
    height = 480;
    speed = 1;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.flowLeft();
    }

}