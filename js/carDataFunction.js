function change(){
    if (carDataChoise.value == "custom"){
        carDataPlace.style.display="block"
        knownCarData.style.display="none"
    }
    else {
        carDataPlace.style.display="none"
        knownCarData.style.display="block"

        knownCarLenght.innerHTML = preSetCarDAta[carDataChoise.value].length
        knownCarMass.innerHTML = preSetCarDAta[carDataChoise.value].mass
        knownCarPower.innerHTML = changeEngValues("kw",knownEngValueChoise.value, preSetCarDAta[carDataChoise.value].power)
        knownCarWitdh.innerHTML = preSetCarDAta[carDataChoise.value].witdh
        console.log(preSetCarDAta[carDataChoise.value].power)
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

function save(){
    preSetCarDAta[ nameChoise.value ] = new carDataTemplate()
    // preSetCarDAta.push(nameChoise.value : new carDataTemplate() )
}

function checkForEngineInfo(){
    
    if ( knowsEngineInfo.checked ) {
        engineInfo.style.display="block"
    } else {
        engineInfo.style.display="none"
    }
}