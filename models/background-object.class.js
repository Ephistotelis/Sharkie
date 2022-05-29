class BackgroundObject {
    x;
    y;
    width;
    height;
    img;
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image)   <img id="image">            Ist genau das selbe nur die JS version
        this.img.src = path;
    }
}