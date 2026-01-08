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
    if(haveChosenCar&& startSpeed.value>=0 && tirePressure>=0){
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
        ctx.moveTo(testX, testY);
        ctx.moveTo(800, 100);
        ctx.stroke();


        //dzeltena krāsa

        pointCalculation(preSetCarDAta[chosenCar].mass,preSetCarDAta[chosenCar].power, startSpeed)
    }
    drawCheckPoints()
}



function drawTest(){
    ctx.beginPath();
    ctx.moveTo(135,435);
    ctx.quadraticCurveTo(testX, testY, 800,100);
    ctx.stroke();

}



function pointCalculation(mass,power, startSpeed){
    let pointKeeper = [new dataEntry(0,300+190*(rangeBar.value/100),695,startSpeed.value,-1)]; // laiks starp posmiem un ir ielikts sakuma punkts ar sakuma parametriem
     finalTimes = [];  // beigu laiki

    while(pointKeeper.length>0) {
        let now=pointKeeper[0]
        pointKeeper.shift();
        if(now.currentPoint<7){
            for(let i =0; i <5; i++){
                let time1
                let time2
                let nextXPoz = Math.max(lines[now.currentPoint+1][0], lines[now.currentPoint+1][2])-Math.min(lines[now.currentPoint+1][0], lines[now.currentPoint+1][2])*i/5
                let nextyPoz = Math.max(lines[now.currentPoint+1][1], lines[now.currentPoint+1][3])-Math.min(lines[now.currentPoint+1][1], lines[now.currentPoint+1][3])*i/5

                let l = Math.sqrt(( now.xPoz - nextXPoz)**2 + ( now.YPoz - nextyPoz)**2        )
                let a=0
                if (now.speed < optimalSpeed-3) a = power/(now.speed*mass)
                else if (now.speed > optimalSpeed+3) a = brakeOption.value * lietusJautajums.value* riepas.value      //  jādabūn bremzēšajas spēks
                if(a!=0){
                    time1 = now.time + (now.speed*-1 +Math.sqrt(now.speed**2 + 2*a*l))/a
                    time2 = now.time - (now.speed*-1 -Math.sqrt(now.speed**2 + 2*a*l))/a
                }
                else {
                    time1 = now.time + l/now.speed
                    time2 = now.time - l/now.speed
                }
                let time = Math.max(time1, time2);
                let deltaT = time - now.time;
                let newSpeed = now.speed + a * deltaT;
                
                let newArray = now.previousPoints
                newArray.push(i)
                pointKeeper.push(new dataEntry(time,nextXPoz, nextyPoz,newSpeed,now.currentPoint+1),newArray);
            }
        }
        else {
            if(finalTimes.length==1){
                if(finalTimes[0].time <now.time){
                    finalTimes.push(now)
                }
                else {
                    finalTimes.unshift(now)
                }
            }
            else if(finalTimes.length>2){
                for(let i=0; i < finalTimes.length ;i++){
                    if(finalTimes[i].time > now.time){
                        finalTimes.splice(i,0,now)
                        break
                    }
                }
            }

            else finalTimes.push(now)   // vajag uztaisīt lai sakārto pēc lbākajiem laikiem;
        }
    }
    console.log(finalTimes[0])
}