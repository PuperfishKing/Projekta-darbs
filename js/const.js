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

const tripData=document.getElementById("tripData")
const usedCarName=document.getElementById("usedCarName")
const optimalSpeedData=document.getElementById("optimalSpeedData")
const tipTextPlace=document.getElementById("tipTextPlace")

const trackWitdh=10 //metri
const cornerWitdh =10 // metri
let optimalSpeed //m/s
const g=9.81
const pixToM = 17 // 17 pixeļi ir apmeram 1 metrs
let currentSpeed
let testX =40 
let testY =0


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

class dataEntry {
    constructor(time, xPoz, yPoz,speed,currentPoint,previousPoints){
        this.time = time
        this.xPoz = xPoz
        this.yPoz = yPoz
        this.speed=speed
        this.currentPoint = currentPoint
        this.previousPoints = []
    }
}

let lines=[                     // 8 "līnijas" pa kurām meklēs labākos "punktus"
    [240,610,370,500],          // x1,y1,x2,y2
    [125, 420, 255, 320],       // x1,y1,x2,y2
    [40 ,280, 185 ,215],        // x1,y1,x2,y2
    [20, 200, 180, 200],        // x1,y1,x2,y2
    [ 350,  130, 185, 190],     // x1,y1,x2,y2
    [80, 65, 190, 185 ],        // x1,y1,x2,y2
    [132, 35, 195, 180],        // x1,y1,x2,y2
    [200, 20, 200, 180],        // x1,y1,x2,y2
]

 let finalTimes = []

const end= [800,160]            //x,y - beigu punkts


var preSetCarDAta={
    vwGolf3 : new carDataTemplate("vwGolf3",2.471 ,4.071 ,1009 ,110,0.35 ,0 ,0,0),
    fordFiesta: new carDataTemplate( "fordFiesta",1.735,4.069,1200,74 ,0.35,0, 0, 0)
}



