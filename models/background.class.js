class Background extends BackgroundObject {
    x = 0;
    y = 0;
    width = 780;
    height = 480;

    constructor(imagePath) {
        super().loadImage(imagePath);
    }
}