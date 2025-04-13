class  Pirat2 extends MovableObject {
  x = 700;
  width = 50;
  height = 150;

  constructor() {
      super();
      this.loadImage('img/pirat/2_WALK_000.png');  // oder super().loadImage('img/pirat2/2_WALK_000.png'); super() bezieht sich auf die übergeordnete class
    }
    
  run () { 
      console.log('Running!');
  }
}