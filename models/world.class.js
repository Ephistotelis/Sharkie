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
        this.spawnEnemyProgress();
        this.despawnEnemies()
            //this.speedGameProgress();          disabled for NOW
    }


    despawnEnemies() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.checkPosition() < -100) {
                    console.log(enemy, 'out of canvas')
                    this.level.enemies.splice(enemy, 1)
                }
            })
        }, 2000);
    }


    spawnEnemyProgress() {
        setInterval(() => {
            if (this.score > 500 && this.score < 1500) {
                this.level.enemies.push(new Pufferfish_easy(1000))
                this.level.enemies.push(new Jellyfish_easy(1000))
                this.level.enemies.push(new Jellyfish_medium(1000))
                this.level.enemies.push(new Jellyfish_hard(1000))
                this.level.enemies.push(new Jellyfish_veryhard(1000))
            }
            if (this.score > 1000 && this.score < 2000) {
                this.level.enemies.push(new Endboss(1000))
            }
            if (this.score > 2000 && this.score < 3000) {
                this.level.enemies.push(new Pufferfish_medium(1000))
            }
            if (this.score > 2500 && this.score < 3500) {
                this.level.enemies.push(new Pufferfish_hard(1000))
            }
        }, 2000);
    }


    spawnEnemies() {
        setInterval(() => {
            this.level.enemies.push(new Pufferfish(1000))
        }, 2000);
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


    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.checkCollision(enemy)) {
                    // console.log('hit by', enemy) //                                                                                                               consollog
                    this.character.decreaseHealth();
                    enemy.decreaseHealth();
                }
            })
            this.level.endboss.forEach((enemy) => {
                if (this.character.checkCollision(enemy)) {
                    // console.log('hit by', enemy) //                                                                                                               consollog
                    this.character.decreaseHealth();
                    enemy.decreaseHealth();
                    //  console.log(enemy.health);
                }
            })
        }, 10);

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
        this.addStatusBarsToMap(this.level.statusbars)
        this.addToMap(this.character)

        // draw wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    addStatusBarsToMap(objects) {
        objects.forEach(o => {
            this.addBarToMap(o)
        })
    }
    addBarToMap(bar) {
        bar.draw(this.ctx);
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
                this.level.statusbars[3].score = this.score;
                console.log(this.score)
            } else {
                return
            }
        }, 1000);
    }


    speedGameProgress() {
            setInterval(() => {
                this.level.backgroundObjectsAll.forEach((bg) => {
                    if (bg.speed < 6) {
                        bg.speed += 0.001
                    }
                })
            }, 1000 / 60);
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