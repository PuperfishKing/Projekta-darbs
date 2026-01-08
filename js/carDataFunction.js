function change(){
    console.log("changesmt")
    if (carDataChoise.value == "custom"){
        knownCarData.style.display="none"
        carInputDataPlace.style.display="block"
    }
    else {
        knownCarData.style.display="block"
        carInputDataPlace.style.display="none"

        //knownCarLenght.innerHTML = preSetCarDAta[carDataChoise.value].length
        knownCarMass.innerHTML = preSetCarDAta[carDataChoise.value].mass
        knownCarPower.innerHTML = changeEngValues("kw",knownEngValueChoise.value, preSetCarDAta[carDataChoise.value].power)
        knownCarWitdh.innerHTML = preSetCarDAta[carDataChoise.value].witdh
        //knownCarPowerOutput.innerHTML = preSetCarDAta[carDataChoise.value].powerOutput
        //knownCarFuelType.innerHTML=preSetCarDAta[carDataChoise.value].fuelType
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
        preSetCarDAta[ nameChoise.value ] = new carDataTemplate(nameChoise.value ,carWitdhInput.value,carLengthInput.value,carMassInput.value,changeEngValues(engineMesurmentChoise.value,"kw",carPowerInput.value))
        let newOption = document.createElement('option')
        newOption.value = nameChoise.value
        newOption.text =nameChoise.value 
        carDataChoise.appendChild(newOption)
        console.log("Saglabats: ",nameChoise.value) 
        localStorage.setItem("preSetCarDAta",  JSON.stringify(preSetCarDAta))
    }
    else console.log(nameChoise.value, " IR naizņemts")



    // preSetCarDAta.push(nameChoise.value : new carDataTemplate() )
}


function chooseThisCar(){
    haveChosenCar=true
    chosenCar = carDataChoise.value
    chosenCarName.style.display="block"
    chosenCarName.innerHTML="Izvēlētā mašīna: " + carDataChoise.value
}

// function deleteCarData(which){
//     delete preSetCarDAta[which]
//     console.log("deleted : " +which+ " ! now array is like : "+ preSetCarDAta)
// }

function deleteCarData() {
    which = carDataChoise.value
    if (preSetCarDAta.hasOwnProperty(which)) {
        delete preSetCarDAta[which];
        console.log("Deleted: " + which );
        console.log("Now testPreset is:", preSetCarDAta);
        changeCarOptionList()
        localStorage.setItem("preSetCarDAta",  JSON.stringify(preSetCarDAta))
        change()
    } else {
        console.log("Key " + which + " not found");
    }
}


let testPreset = {
    vwGolf3 : new carDataTemplate("vwGolf3",2.471 ,4.071 ,1009 ,110,0.35 ,"FWD",0 ,0,0),
    fordFiesta: new carDataTemplate( "fordFiesta",1.735,4.069,1200,74 ,0.35,"FWD",0, 0, 0)
}

function checkForLocaldata(){
    if (localStorage.length ==1 ) {
        preSetCarDAta = JSON.parse(localStorage.getItem("preSetCarDAta"))
        console.log("kaut kas ir")
    }
    else {
        localStorage.setItem("preSetCarDAta",  JSON.stringify(preSetCarDAta))
        console.log("nav neka")
    }
}

function changeCarOptionList(){
    // let option;
    // option.innerHTML = '<option value='[]+ '>' + array[i] + '</option>';
    // dropDownMenu.appendChild(option);
    carDataChoise.options.length =0
    var option = document.createElement("option");
    option.text = "Custom";
    option.value = "custom"
    carDataChoise.add(option); 
   for (let a of Object.values(preSetCarDAta)) {
    var option = document.createElement("option");
    option.text = a.name;
    option.value = a.name;
    carDataChoise.add(option); 
}

}



change()