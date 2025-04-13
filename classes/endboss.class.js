class  Endboss extends MovableObject {
    x = 700;

    width = 60;
    height = 170;

    constructor() {
        super();
        this.loadImage('img/endboss/1_WALK_000.png');  // oder super().loadImage('img/endboss/1_WALK_000.png'); super() bezieht sich auf die übergeordnete class
      }
      
    run () { 
        console.log('Running!');
    }
}