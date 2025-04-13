class World{
   x = 80;
   y = 250;
   image;
   character = new Character();
   pirates = [
      new Pirat(),
      new Pirat2(),
      new Pirat(),
      new Pirat2(),
    ];
  
   /**
   * Lädt das Bild aus dem Pfad und speichert es als Image-Objekt
   * @param {string} path - Pfad zur Bilddatei
   */
  loadImage(path) {
   this.image = new Image();           // this.image wird ein neues Bild zugewiesen mit new Image(), mgl. wäre auch 
                                       // this.image = document.getElementById('image'); mit <img id="image"> in HTML
   this.image.src = path;
   }

   /**
    * Zeichnet das Objekt auf das Canvas
    * @param {CanvasRenderingContext2D} ctx
    */
   draw(ctx) {
     if (this.image) {
       ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
     }
   }
}