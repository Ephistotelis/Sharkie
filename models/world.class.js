class World {
    character = new Character();
    level = level1;

    canvas;
    ctx;
    keyboard;
    score = 0;
    spawntimer = 1000;
    spawnedBoss = false;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.checkCollisions();
        this.countScore();
        this.setWorld();
        this.spawnBoss();
    }


    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.checkCollision(enemy)) {
                    console.log('hit by', enemy) //                                                                                                               consollog
                    this.character.decreaseHealth();
                }
            })
            this.level.endboss.forEach((enemy) => {
                if (this.character.checkCollision(enemy)) {
                    console.log('hit by', enemy) //                                                                                                               consollog
                    this.character.decreaseHealth();
                    enemy.decreaseHealth();
                    console.log(enemy.health);
                }
            })
        }, 100);

    }


    setWorld() {
        this.character.world = this;

    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.addObjectsToMap(this.level.backgroundObjectsAll)
        this.addObjectsToMap(this.level.barriers)
        this.addObjectsToMap(this.level.enemies)
        this.addObjectsToMap(this.level.endboss)
        this.addToMap(this.character)

        // draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    spawnBoss() {
        setInterval(() => {
            if (this.score > 300 && this.score < 500) {
                console.log(world)
                this.level.endboss.push(new Endboss(760, 20))
                this.spawnedBoss = true;
            }
            if (this.score > 800 && this.score < 1000) {
                console.log(world)
                this.level.endboss.push(new Endboss(760, 100))
                this.spawnedBoss = true;
            }
        }, 1000);

    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o)
        })
    }


    addToMap(mo) {
        mo.draw(this.ctx);
        mo.drawHitbox(this.ctx)
    }

    countScore() {
        setInterval(() => {
            if (!this.character.isDead()) {
                this.score += 100;
                console.log(this.score)
            } else {
                return
            }
        }, 1000);
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