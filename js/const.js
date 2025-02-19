const lauks = document.getElementById("lauks");
const ctx = lauks.getContext("2d");

const rangeBar = document.getElementById("rangeBar")

const inputData = document.getElementById("inputData")
const knowsEngineInfo = document.getElementById("knowsEngineInfo")
const engineInfo = document.getElementById("engineInfo")
const carDataPlace = document.getElementById("carInputDataPlace")
const carDataChoise = document.getElementById("carDataChoise")
const knownCarPowerOutput = document.getElementById("knownCarPowerOutput")
const knownCarFuelType = document.getElementById("knownCarFuelType")

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
const riepas = document.getElementById("riepas")

const track_witdh=10 //metri
const cornerWitdh =10
let optimalSpeed //m/s
const g=9.81
let currentSpeed

class carDataTemplate {
    constructor(name,witdh,length,mass,power,breakCoificient,powerOutput,fuelType, centerOfMassX,centerOfMassY,engineMass,enginePozX, enginePozY){
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
        this.breakCoificient = breakCoificient
        this.fuelType = fuelType

    }
}


var preSetCarDAta={
    vwGolf3 : new carDataTemplate("vwGolf3",2.471 ,4.071 ,1009 ,110,0.35 ,"FWD","Dīzelis",0 ,0,0),
    fordFiesta: new carDataTemplate( "fordFiesta",1.735,4.069,1200,74 ,0.35,"FWD","Bendzīns",0, 0, 0)
}
