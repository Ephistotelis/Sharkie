class Background extends BackgroundObject {
    x = 0;
    y = 0;
    width = 1056;
    height = 720;
    speed = 1;
    constructor(imagePath, x) {
        super().loadImage(imagePath);
        this.x = x;
        this.flowLeft();
    }
}