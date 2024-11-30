function drawTrack(){
    ctx.beginPath();
    ctx.fillRect(0, 0, 800, 700);
    ctx.stroke();
    ctx.fillStyle="gray";
    //ceļa līnija
    //līkums sākums
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
    ctx.lineTo(200, 180)
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