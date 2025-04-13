class  Character extends MovableObject {

    constructor() {
        super();
        this.loadImage('img/character/1.png');  // oder super().loadImage('img/character/1.png'); super() bezieht sich auf die übergeordnete class
      }
    
      jump() {
        console.log('Jumping!');
      }
}