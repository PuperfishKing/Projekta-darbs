function changeThingToDo(){
    if(choiseToChangeAction.value=="choseCar")  {
        chosingTheCar.style.display="block"
        drivingDataEntry.style.display="none"
    }
    else if (choiseToChangeAction.value == "inputDrivingData")  {
        drivingDataEntry.style.display="block"
        chosingTheCar.style.display="none"
    }
    console.log("changed smt")
}

function checkForAllValues(){
    if(haveChosenCar == false  || !startSpeed.value >0 ||!tirePressure.value>0) {alert("Pārbaudit vai ir izvēlēta mašīna un visi dati ir ievadīti <br>" + haveChosenCar +  startSpeed.value + ' '+ tirePressure.value)}
    else return true
}

function changeSpeed(value,from,to){
    if(from =="m/s" && to=="km/h") return number((value/3.6).toFixed(3))
    else if(from="km/h" && to=="m/s") return number((value*3.6).toFixed(3)) //maina vērtības
    else return value
}


function calculateOptimalSpeed(){
    let currentFriction = lietusJautajums.value*riepas.value
    currentSpeed = changeSpeed(atrumaMerv.value,"m/s",startSpeed.value)

    optimalSpeed = Math.sqrt(currentFriction*g*(track_witdh+5)).toFixed(2)

    //drawDrivingLine()
}

function calculateForce(startSpeed, power){
    return power/changeSpeed(startSpeed,atrumaMerv/value,"m/s")
}

function calculateRollingFiction(){
    let rollingCoificient = 0.005+(1/changePressureMesurments(tirePressure.value,tirePressureMesurment.value,"bar"))*(0.01+0.0095*(((changeSpeed( startSpeed.value, atrumaMerv.value, "m/s")/100)**2)))
    return rollingCoificient
}

function changePressureMesurments(value,from,to){
    if(from == "bar" && to=="psi")  return number((value /14.504).toFixed(1) )
    else if(from == "psi" && to=="bar") return number((value *14.504).toFixed(1) )
    else return value
}


function drawDrivingLine(){
    if(checkForAllValues()){
        calculateOptimalSpeed()
       
        drawCarPosision()
        if(currentSpeed <(optimalSpeed*0.75)){ // lēnāk nekā ieteicams
            ctx.strokeStyle="lime"
            ctx.beginPath()
            ctx.moveTo((300+190*(rangeBar.value/100)),700)
            ctx.lineTo(150,150)
            ctx.stroke();
            console.log("zīmē no ",(300+190*(rangeBar.value/100)),695, " uz ",150)
        }
        else if(currentSpeed > (optimalSpeed*1.25)){ // ārāk nekā ieteicamas
            ctx.strokeStyle="red"
            console.log("Nestrada")
            ctx.beginPath()
            ctx.moveTo((300+190*(rangeBar.value/100)),700)
            ctx.lineTo(150,150)
            ctx.stroke();
            console.log("zīmē no ",(300+190*(rangeBar.value/100)),695, " uz ",150)

            //console.log(chosenCar)
            

        }
        else {
            console.log("ok ātrums")
        }
        ctx.beginPath();
        ctx.moveTo(135,435);
        ctx.quadraticCurveTo(testX, testY, 800,100);
        ctx.stroke();


        //dzeltena krāsa
    }
}

function drawTest(){
    ctx.beginPath();
    ctx.moveTo(135,435);
    ctx.quadraticCurveTo(testX, testY, 800,100);
    ctx.stroke();

}