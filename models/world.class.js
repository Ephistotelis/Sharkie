class World {
    character = new Character();
    enemies = [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
    ];
    barriers = [
        new Barrier(),
    ];
    backgroundObjects1 = [
        new Background('img/3. Background/Layers/5. Water/D1.png'),
        new Background('img/3. Background/Layers/4.Fondo 2/D1.png'),
        new Background('img/3. Background/Layers/1. Light/1.png'),
        new Background('img/3. Background/Layers/3.Fondo 1/D1.png'),
        new Background('img/3. Background/Layers/2. Floor/D1.png'),

    ];
    backgroundObjects2 = [
        new Background('img/3. Background/Layers/5. Water/D2.png'),
        new Background('img/3. Background/Layers/4.Fondo 2/D2.png'),
        new Background('img/3. Background/Layers/3.Fondo 1/D2.png'),
        new Background('img/3. Background/Layers/1. Light/2.png'),
        new Background('img/3. Background/Layers/2. Floor/D2.png'),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }



    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        // this.addObjectsToMap(this.backgroundObjects1)
        this.addObjectsToMap(this.backgroundObjects2)
        this.addObjectsToMap(this.barriers)
        this.addObjectsToMap(this.enemies)
        this.addToMap(this.character)




        // draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        })
    }


    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
    }
}