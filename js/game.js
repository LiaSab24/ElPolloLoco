let canvas;
let ctx;
let character = new Image();

function init() {
    canvas = document.getElementById('canvas');
    canvas.width = 720;
    canvas.height = 480;
    ctx = canvas.getContext("2d");

    character. src = '../img/pepe/caminata/1.png';
    
    ctx.drawImage(character, 100, 400, 150, 50);

}