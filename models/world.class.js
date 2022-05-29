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
    x_cord = 0;
    backgroundObjects1 = [
        new Background('img/3. Background/Layers/5. Water/D1.png', 0),
        new Background('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new Background('img/3. Background/Layers/1. Light/1.png', 0),
        new Background('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new Background('img/3. Background/Layers/2. Floor/D1.png', 0),

    ]

    backgroundObjects2 = [
        new Background('img/3. Background/Layers/5. Water/D2.png', 719),
        new Background('img/3. Background/Layers/4.Fondo 2/D2.png', 719),
        new Background('img/3. Background/Layers/3.Fondo 1/D2.png', 719),
        new Background('img/3. Background/Layers/1. Light/2.png', 719),
        new Background('img/3. Background/Layers/2. Floor/D2.png', 719),
    ]

    canvas;
    ctx;
    keyboard;




    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld()
    }

    setWorld() {
        this.character.world = this;
        MovableObject.world = this;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.addObjectsToMap(this.backgroundObjects1)
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

    // für el pollo loco, mit umdrehen, bei sharky kein umdrehen :)
    /* addToMap(mo) {                                   
        if (mo.mirrored) {
            this.ctx.save();
            this.ctx.translate(mo.width, 0);
            this.ctx.scale(-1, 1)
            mo.x = mo.x * -1
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height)
        if (mo.mirrored) {
            mo.x = mo.x * -1
            this.ctx.restore()
        }
    } */
}