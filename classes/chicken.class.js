class  Chicken extends MovableObject {
    width;
    height;

    constructor() {
        super();
        this.loadImage('img/pepe/caminata/1.png');  // oder super().loadImage('img/pepe/caminata/1.png'); super() bezieht sich auf die übergeordnete class
      }
      
    run () { 
    }
}