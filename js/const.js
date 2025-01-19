const lauks = document.getElementById("lauks");
const ctx = lauks.getContext("2d");

const rangeBar = document.getElementById("rangeBar")

const inputData = document.getElementById("inputData")
const knowsEngineInfo = document.getElementById("knowsEngineInfo")
const engineInfo = document.getElementById("engineInfo")
const carDataPlace = document.getElementById("carInputDataPlace")
const carDataChoise = document.getElementById("carDataChoise")
const knownCarPowerOutput = document.getElementById("knownCarPowerOutput")

const chosenActIsCar = document.getElementById("chosingTheCar")
const chosenActIsToInputDrivingData = document.getElementById("drivingDataEntry")
const choiseToChangeAction = document.getElementById("choiseToChangeAction")

const knownCarData = document.getElementById("knownCarData")
const knownCarMass=document.getElementById("knownCarMass")
const knownCarLenght=document.getElementById("knownCarLenght")
const knownCarWitdh=document.getElementById("knownCarWitdh")
const knownCarPower=document.getElementById("knownCarPower")
const customCarPowerOutput = document.getElementById("customCarPowerOutput")

const engineMesurmentChoise = document.getElementById("engineMesurmentChoise")
const engineMesurment = document.getElementById("engineMesurment")

const track_witdh=10 //metri

class carDataTemplate {
    constructor(name,witdh,length,mass,power,powerOutput, centerOfMassX,centerOfMassY,engineMass,enginePozX, enginePozY){
        this.witdh = witdh
        this.length = length
        this.mass = mass
        this.power = power
        this.powerOutput = powerOutput
        this.engineMass = engineMass
        this.enginePozX = enginePozX
        this.enginePozY = enginePozY
        this.centerOfMassX = centerOfMassX
        this.centerOfMassY = centerOfMassY
        this.name = name

    }
}


var preSetCarDAta={
    vwGolf3 : new carDataTemplate("vwGolf3",2.471 ,4.071 ,1009 ,110 ,"FWD",0 ,0,0),
    fordFiesta: new carDataTemplate( "fordFiesta",1.735,4.069,1200,74,"FWD",0, 0, 0)
}

var drivingData={
    speed:undefined,
    friction:undefined
}



