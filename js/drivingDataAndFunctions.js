function changeThingToDo(){
    if(choiseToChangeAction.value=="choseCar")  {
        chosingTheCar.style.display="block"
        drivingDataEntry.style.display="none"
    }
    else if (choiseToChangeAction.value == "inputDrivingData")  {
        drivingDataEntry.style.display="block"
        chosingTheCar.style.display="none"
    }
}
function changeSpeed(to,from,value){
    if(from =="m/s" && to=="km/h") return (value/3.6).toFixed(3)
    else if(from="km/h" && to=="m/s") return (value*3.6).toFixed(3) //maina vērtības
    else return value
}


function calculateOptimalSpeed(){
    let currentFriction = lietusJautajums.value*lietusJautajums.value
    currentSpeed = changeSpeed(atrumaMerv.value,"m/s",startSpeed.value)

    optimalSpeed = Math.sqrt(currentFriction*g*(track_witdh+5)).toFixed(2)

    drawDrivingLine()
}

function calculateAcceleration(startSpeed, mass, power){

}

function drawDrivingLine(){
    drawCarPosision()
    if(currentSpeed <(optimalSpeed*0.85)){
        ctx.strokeStyle="lime"
        ctx.beginPath()
        ctx.moveTo((300+190*(rangeBar.value/100)),700)
        ctx.lineTo(150,150)
        ctx.stroke();
        console.log("zīmē no ",(300+190*(rangeBar.value/100)),695, " uz ",150)
    }
    if(currentSpeed > (optimalSpeed*1.15)){
        ctx.strokeStyle="red"
        console.log("Nestrada")
        ctx.beginPath()
        ctx.moveTo((300+190*(rangeBar.value/100)),700)
        ctx.lineTo(150,150)
        ctx.stroke();
        console.log("zīmē no ",(300+190*(rangeBar.value/100)),695, " uz ",150)
    }
    ctx.beginPath();
    ctx.moveTo(135,435);
    ctx.quadraticCurveTo(testX, testY, 800,100);
    ctx.stroke();


    //dzeltena krāsa
}
function drawTest(){
    ctx.beginPath();
    ctx.moveTo(135,435);
    ctx.quadraticCurveTo(testX, testY, 800,100);
    ctx.stroke();

}