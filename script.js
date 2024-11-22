const lauks = document.getElementById("lauks");
const ctx = lauks.getContext("2d");

const inputData = document.getElementById("inputData")
/**@type {HTMLInputElement} */
const knowsEngineInfo = document.getElementById("knowsEngineInfo")
const engineInfo = document.getElementById("engineInfo")

let x = 5

let canChangeData =false
let hpUZzs = 0.75
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
    console.log("Izvelejas", document.getElementById("carDataChoise").value)
}
function checkForEngineInfo(){
    
    if ( knowsEngineInfo.checked ) {
        engineInfo.style.display="block"
    } else {
        engineInfo.style.display="none"
    }
}

function checkEngineMesurment(){

}

class carDataTemplate {
    constructor(witdh,length,mass,power, centerOfMassX,centerOfMassY,engineMass,enginePozX, enginePozY){
        this.witdh = witdh
        this.length = length
        this.mass = mass
        this.power = power
        this.engineMass = engineMass
        this.enginePozX = enginePozX
        this.enginePozY = enginePozY
        this.centerOfMassX = centerOfMassX
        this.centerOfMassY = centerOfMassY

    }
}

function calculateCenterOfMass(carChoise){
    let curentCar = preSetCarDAta[carChoise]
    curentCar.centerOfMassX = (curentCar.length*(curentCar.mass-curentCar.engineMass) + curentCar.enginePozX*curentCar.engineMass)/curentCar.mass
    curentCar.centerOfMassX = (curentCar.centerOfMassX).toFixed(3)

    curentCar.centerOfMassY = (curentCar.witdh*(curentCar.mass-curentCar.engineMass) + curentCar.enginePozY*curentCar.engineMass)/curentCar.mass
    curentCar.centerOfMassY = (curentCar.centerOfMassX).toFixed(3)
}

let preSetCarDAta={
    vwGolf3 : new carDataTemplate(2.471 ,4.071 ,1009 ,55 ,0 ,0,0),
    fordFiesta: new carDataTemplate(1.735,4.069,1200,74,0, 0, 0)
}

    drawTrack();
//Pati programma