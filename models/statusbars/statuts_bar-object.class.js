class StatusBar {
    x = 20;
    y;
    width = 240;
    height = 70;
    img;
    imageCache = {};
    world;
    loadImage(path) {
        this.img = new Image(); // this.img = document.getElementById('image)   <img id="image">            Ist genau das selbe nur die JS version
        this.img.src = path;
    }
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        })
    }

    loadImagesALL(arr) {
        arr.forEach((array) => {
            this.loadImages(array)
        })

    }
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}