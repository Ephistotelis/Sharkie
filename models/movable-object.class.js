class MovableObject {
    x = 100;
    y = 400;
    width = 100;
    height = 100;
    img;
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image)   <img id="image">            Ist genau das selbe nur die JS version
        this.img.src = path;
    }
    moveRight(speed) {
        this.x = speed;
    }
    moveLeft() {

    }
}