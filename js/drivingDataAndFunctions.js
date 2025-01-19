function changeThingToDo(){
    if(choiseToChangeAction.value=="choseCar")  {
        chosenActIsCar.style.display="block"
        chosenActIsToInputDrivingData.style.display="none"
    }
    else if (choiseToChangeAction.value == "inputDrivingData")  {
        chosenActIsToInputDrivingData.style.display="block"
        chosenActIsCar.style.display="none"
    }
}
function changeLen(to,from,value){
    if(from =="m/s" && to=="km/h") return (value*3.6).toFixed(3)
    else if(from="km/h" && to=="m/s") return (value/3.6).toFixed(3)
    else return value
}

function readData(){

}


function drawCarPosision(){
    drawTrack()
    console.log("Strada drawCarPosision() ", rangeBar.value)
    ctx.fillStyle="red"
    ctx.beginPath()
    ctx.arc((300+190*(rangeBar.value/100)),695,5  ,0,2*Math.PI)
    ctx.fill()
}





function drawDrivingLine(){
    
}