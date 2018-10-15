var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

ctx.lineWidth = 2;

var x_axis = -50;
var y_axis = 20;

//requestAnimationFrame(drawAndUpdate);

for (var i = 0; i < 300; i++) {
    ctx.beginPath();
    ctx.moveTo(x_axis, 0);

    ctx.bezierCurveTo(x_axis + 0, y_axis + 0, x_axis + 45, y_axis + 0, x_axis + 0, y_axis + 25);
    ctx.bezierCurveTo(x_axis + 0, y_axis + 25, x_axis - 50, y_axis + 42, x_axis + 0, y_axis + 60);
    ctx.bezierCurveTo(x_axis + 0, y_axis + 60, x_axis + 50, y_axis + 75, x_axis + 0, y_axis + 90);
    ctx.bezierCurveTo(x_axis + 0, y_axis + 90, x_axis - 40, y_axis + 105, x_axis + 0, y_axis + 115);
    ctx.bezierCurveTo(x_axis + 0, y_axis + 115, x_axis + 67, y_axis + 132, x_axis + 10, y_axis + 135);

    ctx.stroke();
    x_axis += 10;
}
if (window.DeviceMotionEvent == undefined)
    console.log("Your browser does not support the DeviceMotionEvent");

// var maxBarLength = window.innerWidth * 0.8;
window.addEventListener("devicemotion", handleMotionEvent, true);

function handleMotionEvent(event) {
    var x = event.accelerationIncludingGravity.x;
    var y = event.accelerationIncludingGravity.y;
    var z = event.accelerationIncludingGravity.z;
    console.log("handleMotionEvent: ", x, y, z);
    requestAnimationFrame(drawAndUpdate);

    function drawAndUpdate() {
        //             ctx.clearRect(0, 0, 500, 500);
        x_axis = x*2;
      //y_axis=y*2;
        //        for (var i=0;i<300;i++){
        //          ctx.beginPath();
        //          ctx.moveTo(x_axis,0);
        //
        // console.log("handleMotionEvent: ", x_axis, y_axis);
        //
        //          ctx.bezierCurveTo(x_axis+0,y_axis+0, x_axis+45, y_axis+0, x_axis+0, y_axis+25);
        //          ctx.bezierCurveTo(x_axis+0, y_axis+25, x_axis-50, y_axis+42, x_axis+0, y_axis+60);
        //          ctx.bezierCurveTo(x_axis+0, y_axis+60, x_axis+50, y_axis+75,x_axis+0, y_axis+90);
        //          ctx.bezierCurveTo(x_axis+0, y_axis+90, x_axis-40, y_axis+105, x_axis+0, y_axis+115);
        //          ctx.bezierCurveTo(x_axis+0, y_axis+115, x_axis+67, y_axis+132, x_axis+10, y_axis+135);
        //
        //          ctx.stroke();
        //          x_axis += 10;


            var canvas = document.getElementById('canvas');
            var ctx = canvas.getContext('2d');

            ctx.lineWidth = 2;
             var y_axis = (Math.floor(Math.random() * y) + 2);
            console.log(y_axis);

            // var x_axis=-50;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (var i = 0; i < 300; i++) {
                ctx.beginPath();
                ctx.moveTo(x_axis, 0);
                // ctx.bezierCurveTo(x_axis - 0, y_axis - 135, x_axis - 50, y_axis - 125, x_axis + 0, y_axis - 115);
                // ctx.bezierCurveTo(x_axis - 0, y_axis - 115, x_axis + 50, y_axis - 102, x_axis + 0, y_axis - 90);
                // ctx.bezierCurveTo(x_axis - 0, y_axis - 90, x_axis - 50, y_axis - 72, x_axis + 0, y_axis - 60);
                // ctx.bezierCurveTo(x_axis - 0, y_axis - 60, x_axis + 50, y_axis - 42, x_axis + 0, y_axis - 25);
                // ctx.bezierCurveTo(x_axis + 0, y_axis - 25, x_axis - 50, y_axis - 22, x_axis + 0, y_axis + 0);

                ctx.bezierCurveTo(x_axis + 0, y_axis + 0, x_axis + 45, y_axis + 0, x_axis + 0, y_axis + 25);
                ctx.bezierCurveTo(x_axis + 0, y_axis + 25, x_axis - 50, y_axis + 42, x_axis + 0, y_axis + 60);
                ctx.bezierCurveTo(x_axis + 0, y_axis + 60, x_axis + 50, y_axis + 75, x_axis + 0, y_axis + 90);
                ctx.bezierCurveTo(x_axis + 0, y_axis + 90, x_axis - 40, y_axis + 105, x_axis + 0, y_axis + 115);
                ctx.bezierCurveTo(x_axis + 0, y_axis + 115, x_axis + 67, y_axis + 132, x_axis + 10, y_axis + 135);
                ctx.bezierCurveTo(x_axis + 10, y_axis + 135, x_axis - 47, y_axis + 145, x_axis + 20, y_axis + 155);
                ctx.bezierCurveTo(x_axis + 20, y_axis + 155, x_axis + 67, y_axis + 165, x_axis + 20, y_axis + 175);
                ctx.bezierCurveTo(x_axis + 30, y_axis + 175, x_axis - 47, y_axis + 185, x_axis + 20, y_axis + 195);
                ctx.bezierCurveTo(x_axis + 40, y_axis + 195, x_axis + 67, y_axis + 205, x_axis + 20, y_axis + 215);

								ctx.bezierCurveTo(x_axis + 50, y_axis + 215, x_axis - 87, y_axis + 225, x_axis + 30, y_axis + 235);
                ctx.bezierCurveTo(x_axis + 60, y_axis + 235, x_axis + 107, y_axis + 245, x_axis + 30, y_axis + 255);
                ctx.bezierCurveTo(x_axis + 70, y_axis + 255, x_axis - 127, y_axis + 265, x_axis + 40, y_axis + 275);
                ctx.bezierCurveTo(x_axis + 80, y_axis + 275, x_axis + 147, y_axis + 285, x_axis + 40, y_axis + 295);


                ctx.stroke();
                x_axis += 10;
            }

    }
    // requestAnimationFrame(drawAndUpdate);

}
