function change(){
    if (carDataChoise.value == "custom"){
        carDataPlace.style.display="block"
        chosingTheCar.style.display="none"
    }
    else {
        carDataPlace.style.display="none"
        chosingTheCar.style.display="block"

        knownCarLenght.innerHTML = preSetCarDAta[carDataChoise.value].length
        knownCarMass.innerHTML = preSetCarDAta[carDataChoise.value].mass
        knownCarPower.innerHTML = changeEngValues("kw",knownEngValueChoise.value, preSetCarDAta[carDataChoise.value].power)
        knownCarWitdh.innerHTML = preSetCarDAta[carDataChoise.value].witdh
        knownCarPowerOutput.innerHTML = preSetCarDAta[carDataChoise.value].powerOutput
        knownCarFuelType.innerHTML=preSetCarDAta[carDataChoise.value].fuelType
        //console.log(preSetCarDAta[carDataChoise.value].power)
    }
}

function changeEngValues(from,to, value){
    let prop = 0.746
    if(from=="hp" && to=="kw") return Math.round(value*prop)
    else if(from == "kw" && to=="hp") return Math.round(value/prop)
    else return value
}

function changeKnownEngMesurmantes(){
    knownCarPower.innerHTML = changeEngValues("kw",knownEngValueChoise.value, preSetCarDAta[carDataChoise.value].power)
}

// Masinas nosakums: <input type="text" id="nameChoise"> <br>
//                 Mašīnas svars (kg): <input type="number" id="carMassInput" min="0.0" value=""><br>
//                 Mašīnas garums(m): <input onchange="updateCenterOfMassDrawing()" type="number" id="carLengthInput" min="0.0" value=""><br>
//                 Mašīnas platums(m): <input onchange="updateCenterOfMassDrawing()" type="number" id="carWitdhInput" min="0.0" value=""><br></br>

function save(){
    let aiznemts = false
    for(  a in preSetCarDAta) {
        if(preSetCarDAta[a].name == nameChoise.value) {
            aiznemts=true
        }
    }
    if(!aiznemts){
        preSetCarDAta[ nameChoise.value ] = new carDataTemplate(nameChoise.value ,carWitdhInput.value,carLengthInput.value,carMassInput.value,changeEngValues(engineMesurmentChoise.value,"kw",carPowerInput.value),customCarPowerOutput.value,knownCarFuelType.value )
        let newOption = document.createElement('option')
        newOption.value = nameChoise.value
        newOption.text =nameChoise.value 
        carDataChoise.appendChild(newOption)
        console.log("Saglabats: ",nameChoise.value) 
    }
    else console.log(nameChoise.value, " IR naizņemts")

    // preSetCarDAta.push(nameChoise.value : new carDataTemplate() )
}



function  updateCenterOfMassDrawing(){
    
}





change()