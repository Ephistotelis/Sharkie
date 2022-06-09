class World {
    character = new Character();
    level = level1;

    canvas;
    ctx;
    keyboard;
    score = 0;
    wholeScoreKilled = 0;
    spawntimer = 1000;
    spawnedBoss = false;
    enemies_killed = {
        'PF_easy': 0,
        'PF_medium': 0,
        'PF_hard': 0,
        'JF_easy': 0,
        'JF_medium': 0,
        'JF_hard': 0,
        'JF_veryhard': 0,
    };

    gameActiv = false;

    selectedMusic = new Audio('audio/background_music_2.mp3')
    sounds = {
        "music1": new Audio('audio/background_music_1.mp3'),
        "music2": new Audio('audio/background_music_2.mp3'),
        "bubble": new Audio('audio/bubble.mp3'),
        "hurt_character": new Audio('audio/hurt.mp3'),
        "hurt_enemy": new Audio('audio/hurt_enemy.mp3'),
        "collected_coin": new Audio('audio/collectCoin.mp3'),
        "collected_bottle": new Audio('audio/bottle.mp3'),
    }



    constructor(canvas, keyboard, music) {
        this.gameActiv = true;
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.playSound(this.selectedMusic)
        this.selectedMusic.loop = true;
        this.selectedMusic.volume = 0.2
        this.setWorld();
        this.draw();
        this.checkCollisions();
        this.checkCollisionsAttack();
        this.countScore();

        //this.spawnBoss();
        this.spawnEnemyProgress();
        this.spawnCoins();
        this.spawnBottle();
        this.despawnObjects();
        this.despawnEnemiesWhenDead();
        this.endGame();
        //this.speedGameProgress(); //     disabled for NOW
    }
    playSound(sound) {
        this.loadSound(sound);
        sound.play()
    }

    loadSound(sound) {
        sound.load()
    }

    endGame() {
        setInterval(() => {
            if (this.character.isDead() && this.isGameActiv()) {
                this.gameActiv = false;
                this.calcScoreKills()
                let endscore = this.score + (this.character.coins_collected * 500) + (this.wholeScoreKilled)
                addScoreToLS(endscore)
            }
        }, 100);
    }


    calcScoreKills() {
        let PF_easy = 150 * this.enemies_killed.PF_easy;
        let PF_medium = 200 * this.enemies_killed.PF_medium;
        let PF_hard = 300 * this.enemies_killed.PF_hard;
        let JF_easy = 250 * this.enemies_killed.JF_easy;
        let JF_medium = 300 * this.enemies_killed.JF_medium;
        let JF_hard = 400 * this.enemies_killed.JF_hard;
        let JF_veryhard = 500 * this.enemies_killed.JF_veryhard;

        this.wholeScoreKilled = PF_easy + PF_medium + PF_hard + JF_easy + JF_medium + JF_hard + JF_veryhard
    }


    despawnObjects() {
        setInterval(() => {
            this.level.enemies.forEach((enemy, index) => {
                if (enemy.checkPosition() < -100) {
                    console.log(enemy, 'out of canvas')
                    this.level.enemies.splice(index, 1)
                }
            })
            this.level.collectableObjects.forEach((item, index) => {
                if (item.checkPosition() < -100) {
                    console.log(item, 'out of canvas')
                    this.level.collectableObjects.splice(index, 1)
                }
            })
        }, 100);
    }


    addKillToScore(enemy) {
        if (enemy instanceof Pufferfish_easy) {
            this.enemies_killed.PF_easy += 1
        }
        if (enemy instanceof Pufferfish_medium) {
            this.enemies_killed.PF_medium += 1
        }
        if (enemy instanceof Pufferfish_hard) {
            this.enemies_killed.PF_hard += 1
        }
        if (enemy instanceof Jellyfish_easy) {
            this.enemies_killed.JF_easy += 1
        }
        if (enemy instanceof Jellyfish_medium) {
            this.enemies_killed.JF_medium += 1
        }
        if (enemy instanceof Jellyfish_hard) {
            this.enemies_killed.JF_hard += 1
        }
        if (enemy instanceof Jellyfish_veryhard) {
            this.enemies_killed.JF_veryhard += 1
        }
        console.warn('All enemies killed:', this.enemies_killed)
    }


    despawnEnemiesWhenDead() {
        setInterval(() => {
            this.level.enemies.forEach((enemy, index) => {
                if (enemy.isDead() && enemy.DEAD == false) {
                    enemy.attack_damag = 0;
                    enemy.DEAD = true;
                    this.addKillToScore(enemy);
                    console.log(index, enemy)
                    setTimeout(() => {
                        enemy.moveToDespawn()
                        console.log(this.level.enemies)
                    }, 600);
                    //console.log(this.level.enemies)
                    //console.log('enemy dead:', enemy)
                }
            })
        }, 10);
    }


    spawnCoins() {
        setInterval(() => {
            this.level.collectableObjects.push(new Coin())
        }, 6000); //6000
    }


    spawnBottle() {
        setInterval(() => {
            this.level.collectableObjects.push(new Bottle())
        }, 6500); //6500
    }


    spawnEnemyProgress() {
        setInterval(() => {
            if (this.gameActiv == true) {


                if (this.score > 0 && this.score < 1500) {
                    this.level.enemies.push(new Pufferfish_easy(1100))
                }
                if (this.score > 1000 && this.score < 2000) {
                    this.level.enemies.push(new Jellyfish_easy(1100))
                }
                if (this.score > 1500 && this.score < 3000) {
                    this.level.enemies.push(new Pufferfish_medium(1100))
                }
                if (this.score > 2500 && this.score < 3500) {
                    this.level.enemies.push(new Pufferfish_hard(1100))
                }
                if (this.score > 3000 && this.score < 4500) {
                    this.level.enemies.push(new Jellyfish_medium(1100))
                }
                if (this.score > 4000 && this.score < 5500) {
                    this.level.enemies.push(new Jellyfish_hard(1100))
                }
                if (this.score > 5500 && this.score < 6500) {
                    this.level.enemies.push(new Jellyfish_veryhard(1100))
                }
                if (this.score > 6500) {
                    this.level.enemies.push(new Pufferfish_hard(1100))
                    this.level.enemies.push(new Jellyfish_medium(1100))
                    this.level.enemies.push(new Jellyfish_hard(1100))
                    this.level.enemies.push(new Pufferfish_easy(1100))
                }
            }
        }, 2000)

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
                this.level.endboss.push(new Endboss(760, 300))
                this.spawnedBoss = true;
            }
        }, 1000);

    }


    checkCollisions() {
        setInterval(() => {
            this.level.enemies.forEach((enemy) => {
                if (this.character.checkCollision(enemy)) {
                    // console.log('hit by', enemy) // 
                    if (this.character.immortal == false) {
                        this.character.decreaseHealth(enemy);
                    }
                    enemy.decreaseHealth(this.character);
                    if (this.gameActiv == true) {
                        enemy.playHurtSound()
                    }
                    //  console.log("Character health:", this.character.health); //                                                                                  consollog
                    // console.log("Enemy health", enemy.health); //                                                                                                   consollog
                }
            })
            this.level.collectableObjects.forEach((item, index) => {
                if (this.character.checkCollision(item)) {
                    if (item instanceof Bottle) {
                        this.character.reduceCD();
                        this.sounds.collected_bottle.play()
                    }
                    if (item instanceof Coin) {
                        this.character.addCoin();
                        this.sounds.collected_coin.play()
                    }
                    this.level.collectableObjects.splice(index, 1)
                }
            })
            this.level.endboss.forEach((enemy) => {
                if (this.character.checkCollision(enemy)) {
                    // console.log('hit by', enemy) //                                                                                                               consollog
                    this.character.decreaseHealth(enemy);
                    enemy.decreaseHealth(this.character);
                    // console.log("Character health:", this.character.health); //                                                                                  consollog
                    // console.log("Enemy health", enemy.health); //                                                                                                  consollog
                }
            })
        }, 100);

    }


    checkCollisionsAttack() {
        setInterval(() => {
            if (this.level.attackObject.length > 0) {
                this.level.enemies.forEach((enemy) => {
                    for (let i = 0; i < this.level.attackObject.length; i++) {
                        if (this.level.attackObject[i].checkCollision(enemy)) {
                            // console.log('hit by', enemy) //                                                                                                               consollog
                            enemy.decreaseHealth(this.level.attackObject[i]);
                            enemy.playHurtSound()
                            this.level.attackObject.splice(this.level.attackObject[i], 1)
                            console.log("Character health:", this.character.health); //                                                                                  consollog
                            console.log("Enemy health", enemy.health); //                                                                                                   consollog
                        }
                    }
                });
                this.level.endboss.forEach((enemy) => {
                    for (let i = 0; i < this.level.attackObject.length; i++) {
                        if (this.level.attackObject[i].checkCollision(enemy)) {
                            // console.log('hit by', enemy) //                                                                                                               consollog
                            enemy.decreaseHealth(this.level.attackObject[i]);
                            this.level.attackObject.splice(this.level.attackObject[i], 1)
                                // console.log("Character health:", this.character.health); //                                                                                  consollog
                            console.log("Enemy health", enemy.health); //                                                                                                  consollog
                        }
                    }
                })

            }
        }, 10);
    }


    setWorld() {
        this.character.world = this;
        this.level.statusbars[0].world = this
    }


    draw() {
        if (this.gameActiv == true) {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

            this.addObjectsToMap(this.level.backgroundObjectsAll)
            this.addObjectsToMap(this.level.barriers)
            this.addObjectsToMap(this.level.enemies)
            this.addObjectsToMap(this.level.endboss)
            this.addObjectsToMap(this.level.attackObject)
            this.addObjectsToMap(this.level.collectableObjects)
            this.addStatusBarsToMap(this.level.statusbars)
            this.addToMap(this.character)

            // draw wird immer wieder aufgerufen
            let self = this;
            requestAnimationFrame(function() {
                self.draw();
            });
        }
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
                this.level.statusbars[2].score = this.score;
                //console.log(this.score)
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


    isGameActiv() {
        return this.gameActiv == true
    }
}