
/**@type {HTMLInputElement} */

let x = 5

let canChangeData =false
let hpUZzs = 0.75
ctx.font = "60px serif";

ctx.fillStyle="green";


let track_witdh=10 //metri
let proportion = 0.0025 // 1 pix ir 0,0025 m , 10000/400


let w =0 // jāmaina

let startPoint={
    right: {
        x:300 + (w/2.5)/2,
        y:700
    },
    mid:{
        x:500,
        y:700
    },
    left:{
        x:700 - (w/2.5)/2,
        y:700
    }
}
let endPoint ={
    x: 700,
    y: 30
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

var preSetCarDAta={
    vwGolf3 : new carDataTemplate(2.471 ,4.071 ,1009 ,110 ,0 ,0,0),
    fordFiesta: new carDataTemplate(1.735,4.069,1200,74,0, 0, 0)
}

drawTrack();
change()
checkForEngineInfo()
//Pati programma