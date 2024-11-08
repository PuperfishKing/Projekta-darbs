const lauks = document.getElementById("lauks");
const ctx = lauks.getContext("2d");
let inputData = document.getElementById("inputData")
ctx.font = "60px serif";

ctx.fillStyle="green";


let track_witdh=10000 //mlilimetri
let proportion = 2.5 // 1 pix ir 2,5 mm , 10000/400


function drawTrack(){
    ctx.beginPath();
    ctx.fillRect(0, 0, 800, 700);
    ctx.stroke();
    ctx.fillStyle="gray";
    //ceļa līnija
    //līkums sākums
    ctx.beginPath();
    ctx.moveTo(0, 219);
    ctx.lineTo(300, 700);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(47, 0);
    ctx.lineTo(500, 700);
    ctx.stroke();

    //pagrieziena beigas
    ctx.beginPath();
    ctx.moveTo(200, 19);
    ctx.lineTo(800, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 152);
    ctx.lineTo(800, 270);
    ctx.stroke();


    //ceļa aizpildijums
    //sakums
    ctx.beginPath();
    ctx.moveTo(0, 219);
    ctx.lineTo(300, 700);
    ctx.lineTo(500, 700);
    ctx.lineTo(47, 0)
    ctx.lineTo(0, 0);
    ctx.fill();

    // pagrieziena vidus
    ctx.beginPath();
    ctx.arc(200, 200, 180, 1.81,  1.56* Math.PI);
    ctx.fill();

    ctx.fillStyle = "green";

    ctx.beginPath();
    ctx.arc(200, 200, 20, 2.35,  4* Math.PI);
    ctx.fill(); 
    ctx.fillStyle = "gray";
    //beigas
    ctx.beginPath();
    ctx.moveTo(200, 20);
    ctx.lineTo(800, 100);
    ctx.lineTo(800, 270);
    ctx.lineTo(200, 180)
    ctx.fill();
    //ceļa līniju vidus
    //pagrieziena vidus
    ctx.beginPath();
    ctx.arc(200, 200, 180, 2.7,  1.5* Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(200, 200, 20, 2.35,  1.5* Math.PI);
    ctx.stroke();
}
function change(){
    
}

let preSetCarDAta={
    vwGolf:{
        witdh:2471,
        length:4071,
        mass:1009,
        power:55,
        pointOfMassX:0,
        pointOfMassY:0,
    }
}

let carData={
    witdh:0,
    length:0,
    mass:0,
    power:0,
    pointOfMassX:0,
    pointOfMassY:0,

}

let startPoint={
    right: {
        x:300 + (carData.witdh/2.5)/2,
        y:700
    },
    mid:{
        x:500,
        y:700
    },
    left:{
        x:700 - (carData.witdh/2.5)/2,
        y:700
    }
}
let endPoint ={
    x: 700,
    y: 30
}





drawTrack();
//Pati programma