const lauks = document.getElementById("lauks");
const ctx = lauks.getContext("2d");

const rangeBar = document.getElementById("rangeBar")

const inputData = document.getElementById("inputData")
const knowsEngineInfo = document.getElementById("knowsEngineInfo")
const engineInfo = document.getElementById("engineInfo")
const carDataPlace = document.getElementById("carInputDataPlace")
const carDataChoise = document.getElementById("carDataChoise")
const knownCarPowerOutput = document.getElementById("knownCarPowerOutput")
const carInputDataPlace = document.getElementById("carInputDataPlace")
const chosenCarName = document.getElementById("chosenCarName")


let haveChosenCar = false
let chosenCar=''
const chosingTheCar = document.getElementById("chosingTheCar")
const drivingDataEntry = document.getElementById("drivingDataEntry")
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
const tirePressure = document.getElementById("tirePressure")
const tirePressureMesurment = document.getElementById("tirePressureMesurment")
const  startSpeed = document.getElementById("startSpeed")

const track_witdh=10 //metri
const cornerWitdh =10 // metri
let optimalSpeed //m/s
const g=9.81
let currentSpeed
let testX =40 
let testY =0
let hpUZzs = 0.75

class carDataTemplate {
    constructor(name,witdh,length,mass,power,powerOutput,breakCoificient, centerOfMassX,centerOfMassY,engineMass,enginePozX, enginePozY){
        this.witdh = witdh
        this.length = length
        this.mass = mass
        this.powerOutput=powerOutput
        this.power = power
        this.engineMass = engineMass
        this.enginePozX = enginePozX
        this.enginePozY = enginePozY
        this.centerOfMassX = centerOfMassX
        this.centerOfMassY = centerOfMassY
        this.name = name
        this.breakCoificient = breakCoificient

    }
}


var preSetCarDAta={
    vwGolf3 : new carDataTemplate("vwGolf3",2.471 ,4.071 ,1009 ,110,0.35 ,0 ,0,0),
    fordFiesta: new carDataTemplate( "fordFiesta",1.735,4.069,1200,74 ,0.35,0, 0, 0)
}



