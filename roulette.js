let ctx;

window.setTimeout(
    function draw(){
        let canvas = document.getElementById('gameBoardContainer');
        if (canvas.getContext) {
            ctx = canvas.getContext('2d');
            ctx.scale(8, 8);
            drawWhiteLines();
            
            // ctx.font = '48px serif';
            // ctx.fillText('Hello world', 10, 50);
          } else {
            alert("Doesn't work.");
          }
    }    
    , 300);


function drawWhiteLines(){
    ctx.strokeStyle = "white";
    ctx.lineJoin = "round";
    ctx.lineWidth = 0.5;
    drawOutline();
    drawInnerLines();
}

function drawOutline(){
    ctx.beginPath();
    ctx.moveTo(15, 18);
    ctx.lineTo(85, 18);
    ctx.lineTo(85, 36);
    ctx.lineTo(85, 36);
    ctx.lineTo(80, 36);
    ctx.lineTo(80, 48);
    ctx.lineTo(20, 48);
    ctx.lineTo(20, 36);
    ctx.lineTo(15, 36);
    ctx.lineTo(10, 27);
    ctx.closePath();
    ctx.stroke();
}

function drawInnerLines(){
    for (let i = 0; i < 13; i++){
        ctx.beginPath();
        ctx.moveTo((20 + (i * 5)), 18);
        ctx.lineTo((20 + (i * 5)), 36);
        ctx.stroke();
    }
    for (let j = 0; j < 3; j++){
        ctx.beginPath();
        ctx.moveTo(20, (24 + (j * 6)));
        ctx.lineTo(85, (24 + (j * 6)));
        ctx.stroke();
    }
    ctx.beginPath();

    // long horizontal:
    ctx.moveTo(20, 42);
    ctx.lineTo(80, 42);

    // little verticals on 2nd to last row:
    ctx.moveTo(40, 36);
    ctx.lineTo(40, 48);
    ctx.moveTo(60, 36);
    ctx.lineTo(60, 48);
    ctx.stroke();

    // little verticals on last row:
    for (k = 0; k < 5; k++){
        ctx.beginPath();
        ctx.moveTo(30 + (k * 10), 42);
        ctx.lineTo(30 + (k * 10), 48);
        ctx.stroke();
    }
}