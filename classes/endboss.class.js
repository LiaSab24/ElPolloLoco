class  EndBoss extends MovableObject {
    width = 50;
    height = 150;

    constructor() {
        super();
        this.loadImage('img/pirat/WALK_000.png');  // oder super().loadImage('img/pepe/caminata/1.png'); super() bezieht sich auf die übergeordnete class
      }
      
    run () { 
    }
}