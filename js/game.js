let canvas;
let ctx;
let character;              //Image();

function init() {
  canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 480;
  ctx = canvas.getContext('2d');

  character = new Character();

  // Sobald Bild geladen ist, zeichnen
  character.image.onload = () => {
    character.draw(ctx);
  };
}

window.onload = init;
