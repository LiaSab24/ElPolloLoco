let canvas;
let ctx;
let character = new Character();              //Image();

function init() {
    canvas = document.getElementById('canvas');
    canvas.width = 800;
    canvas.height = 480;
    ctx = canvas.getContext('2d');
  
    character.src = 'img/pepe/caminata/1.png';
  
    character.onload = function () {
      ctx.drawImage(character);
    };
  }
  console.log('my Character is', character);
  window.onload = init;
