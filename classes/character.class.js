class  Character extends MovableObject {

    constructor() {
        super();
        this.loadImage('img/pepe/caminata/1.png');  // oder super().loadImage('img/pepe/caminata/1.png'); super() bezieht sich auf die übergeordnete class
      }
    
      jump() {
        console.log('Jumping!');
      }
}