class  Character extends MovableObject {
    
    width = 50;
    height = 150;

    constructor() {
        super();
        this.loadImage('img/pepe/caminata/1.png');
      }
    
      jump() {
        console.log('Jumping!');
      }
}