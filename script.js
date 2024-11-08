const lauks = document.getElementById("lauks");
const ctx = lauks.getContext("2d");

let inputData = document.getElementById("inputData")
let knowsEngineInfo = document.getElementById("knowsEngineInfo")


ctx.font = "60px serif";

ctx.fillStyle="green";


let track_witdh=10 //metri
let proportion = 0.0025 // 1 pix ir 0,0025 m , 10000/400


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

class carDataTemplate {
    constructor(witdh,length,mass,power, centerOfMassX,centerOfMassY){
        this.witdh = witdh;
        this.length = length;
        this.mass = mass;
        this.power = power;
        this.centerOfMassX = centerOfMassX;
        this.centerOfMassY = centerOfMassY;
    }
}

let carData={
    witdh:0,
    length:0,
    mass:0,
    power:0,
    centerOfMassX:0,
    centerOfMassY:0,
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





function change(){
    
}

function checkForEngineInfo(){
    //console.log(document.getElementById("knowsEngineInfo").style.display.valueOf())
    if(knowsEngineInfo){
        document.getElementById("engineInfo").style.display='blocked';
    }
    else{
        //document.getElementById("engineInfo").setAttribute("hidden", "hidden");
        
    }
}

let preSetCarDAta={
    vwGolf : new carDataTemplate(2.471 ,4.071 ,1009 ,55 ,0 ,0),
}





drawTrack();
//Pati programma