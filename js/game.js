let canvas;
let ctx;
let character = new MovableObject();              //Image();

function init() {
    canvas = document.getElementById('canvas');
    canvas.width = 720;
    canvas.height = 480;
    ctx = canvas.getContext('2d');
  
    character.src = 'img/pepe/caminata/1.png';
  
    character.onload = function () {
      ctx.drawImage(character, height = 50, 170);
    };
  }
  
  window.onload = init;
