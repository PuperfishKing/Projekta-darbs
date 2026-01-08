function drawTrack(){
    ctx.lineWidth=4

    ctx.strokeStyle="Black"
    ctx.fillStyle="green"
    ctx.beginPath();
    ctx.fillRect(0, 0, 800, 700);
    ctx.stroke();
    
    //zīmē smiltis

    ctx.fillStyle = "#fdee76";
    ctx.beginPath();

    ctx.fillRect(0,0,800,150);
    ctx.fill();


    //ceļa līnija
    //līkums sākums
    ctx.fillStyle="gray";
    ctx.beginPath();
    ctx.moveTo(0, 219);
    ctx.lineTo(300, 700);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(47, 0);
    ctx.lineTo(500, 700);
    ctx.stroke();

    //pagrieziena beigas
    ctx.beginPath();
    ctx.moveTo(200, 19);
    ctx.lineTo(800, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 152);
    ctx.lineTo(800, 270);
    ctx.stroke();


    //ceļa aizpildijums
    //sakums
    ctx.beginPath();
    ctx.moveTo(0, 219);
    ctx.lineTo(300, 700);
    ctx.lineTo(500, 700);
    ctx.lineTo(47, 0)
    ctx.lineTo(0, 0);
    ctx.fill();

    // pagrieziena vidus
    ctx.beginPath();
    ctx.arc(200, 200, 180, 1.81,  1.56* Math.PI);
    ctx.fill();

    ctx.fillStyle = "green";

    ctx.beginPath();
    ctx.arc(200, 200, 20, 2.35,  4* Math.PI);
    ctx.fill(); 
    ctx.fillStyle = "gray";
    //beigas
    ctx.beginPath();
    ctx.moveTo(200, 20);
    ctx.lineTo(800, 100);
    ctx.lineTo(800, 270);
    ctx.lineTo(200, 180);
    ctx.fill();
    //ceļa līniju vidus
    //pagrieziena vidus
    ctx.beginPath();
    ctx.arc(200, 200, 180, 2.7,  1.5* Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(200, 200, 20, 2.35,  1.5* Math.PI);
    ctx.stroke();
}

function drawCarPosision(){
    drawTrack()
    //console.log("Strada drawCarPosision() ", rangeBar.value)
    ctx.fillStyle="red"
    ctx.beginPath()
    ctx.arc((300+190*(rangeBar.value/100)),695,5  ,0,2*Math.PI) //zime iebraukšanas punktu
    ctx.fill()
}

function drawDrivingLine(){
    drawCarPosision()
    
    if(currentSpeed <(optimalSpeed*0.85)){
        ctx.strokeStyle="lime"
        ctx.beginPath()
        ctx.moveTo((300+190*(rangeBar.value/100)),700)
        ctx.lineTo(135,435)
        ctx.stroke();
        console.log("zīmē no ",(300+190*(rangeBar.value/100)),695, " uz ",150,150)
    }
    if(currentSpeed > (optimalSpeed*1.15)){
        ctx.strokeStyle="red"
        console.log("Nestrada")
        ctx.beginPath()
        ctx.moveTo((300+190*(rangeBar.value/100)),700)
        ctx.lineTo(131,435)
        ctx.stroke();
        console.log("zīmē no ",(300+190*(rangeBar.value/100)),695, " uz ",150,150)
    }

    ctx.beginPath();
    ctx.moveTo((300+190*(rangeBar.value/100)),695);
    ctx.quadraticCurveTo(testX, testY, 800,100);
    ctx.stroke();


    //dzeltena krāsa

}

function drawCheckPoints( ){   // secība ir no beigām uz sākumu
    ctx.beginPath();
    ctx.arc(795, 160, 2, 0, 2 * Math.PI);             //beigu punkts
    ctx.stroke();  

    ctx.moveTo(200, 20);
    ctx.lineTo(200, 180);                      //pēdējā līnija
    ctx.stroke();

    ctx.moveTo(135, 35);
    ctx.lineTo(195, 180);
    ctx.stroke();

    ctx.moveTo(80, 65);
    ctx.lineTo(190, 185);
    ctx.stroke();

    ctx.moveTo(35, 130);
    ctx.lineTo(185, 190);
    ctx.stroke();

    ctx.moveTo(20, 200);
    ctx.lineTo(180, 200);
    ctx.stroke();

    ctx.moveTo(40, 280);
    ctx.lineTo(185, 215);
    ctx.stroke();


    ctx.moveTo(125, 420);
    ctx.lineTo(255, 320);
    ctx.stroke();



    ctx.moveTo(240, 610);
    ctx.lineTo(370, 500);
    ctx.stroke();
 
}