class Level {
    enemies;
    barriers;
    backgroundObjectsAll;
    endboss;
    statusbars;
    attackObject = [];
    collectableObjects = [];
    constructor(enemies, endboss, barriers, backgroundObjectsAll, statusbars) {
        this.enemies = enemies;
        this.endboss = endboss;
        this.barriers = barriers;
        this.backgroundObjectsAll = backgroundObjectsAll;
        this.statusbars = statusbars;
    }
}