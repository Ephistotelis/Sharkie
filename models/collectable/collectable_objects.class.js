class CollectableObjects extends MovableObject {
    width = 50;
    height = 50;
    x = 1100;
    y = this.randomNumber(50, 600);
    img;
    speed = 2;
    currentImage = 0;
}