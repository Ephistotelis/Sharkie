const level1 = new Level(
    [
        new Pufferfish(),
        new Pufferfish(),
        new Pufferfish(),
        new Endboss()
    ], [
        new Barrier()
    ], [
        new Background('img/3. Background/Layers/5. Water/D1.png', 0),
        new Background('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
        new Background('img/3. Background/Layers/1. Light/1.png', 0),
        new Background('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
        new Background('img/3. Background/Layers/2. Floor/D1.png', 0),

        new Background('img/3. Background/Layers/5. Water/D2.png', 719),
        new Background('img/3. Background/Layers/4.Fondo 2/D2.png', 719),
        new Background('img/3. Background/Layers/3.Fondo 1/D2.png', 719),
        new Background('img/3. Background/Layers/1. Light/2.png', 719),
        new Background('img/3. Background/Layers/2. Floor/D2.png', 719),
    ]
);