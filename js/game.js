let canvas;
let ctx;
let character = new Character();
let pirates = [
  new Pirat(),
  new Pirat2(),
  new Pirat(),
  new Pirat2(),
];
let world = new World();

function init() {
  canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 480;
  ctx = canvas.getContext('2d');

  // Sobald Bild geladen ist, zeichnen
  character.image.onload = () => {
    character.draw(ctx);
  };
}

window.onload = init;
