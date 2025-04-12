let canvas;
let ctx;
let world = new World();

function init() {
  canvas = document.getElementById('canvas');
  canvas.width = 800;
  canvas.height = 480;
  ctx = canvas.getContext('2d');

  console.log('my character is:', world.character);
  
}

window.onload = init;
