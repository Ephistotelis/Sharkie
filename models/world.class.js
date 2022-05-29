class World {
    character = new Character();
    level = level1;

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



        this.addObjectsToMap(this.level.backgroundObjectsAll)
        this.addObjectsToMap(this.level.barriers)
        this.addObjectsToMap(this.level.enemies)
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