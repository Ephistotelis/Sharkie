 const level1 = new Level(
     [], [], [
         //new Barrier()
     ], [
         // fürs erste ohne moving background, später mit moving background und die grafix bugs fixen
         new Background('img/3. Background/Dark/1.png', 0),
         new Background('img/3. Background/Dark/2.png', 1055),
         /* new Background('img/3. Background/Layers/5. Water/D1.png', 0),
         new Background('img/3. Background/Layers/4.Fondo 2/D1.png', 0),
         new Background('img/3. Background/Layers/1. Light/1.png', 0),
         new Background('img/3. Background/Layers/3.Fondo 1/D1.png', 0),
         new Background('img/3. Background/Layers/2. Floor/D1.png', 0),

         new Background('img/3. Background/Layers/5. Water/D2.png', 719),
         new Background('img/3. Background/Layers/4.Fondo 2/D2.png', 719),
         new Background('img/3. Background/Layers/3.Fondo 1/D2.png', 719),
         new Background('img/3. Background/Layers/1. Light/2.png', 719),
         new Background('img/3. Background/Layers/2. Floor/D2.png', 719), */
     ], [
         new StatusBar_Health(),
         //new StatusBar_Poison(),
         new StatusBar_Coin(),
         new StatusBar_Score(),
         new StatusBar_Cooldown(),
     ]
 );