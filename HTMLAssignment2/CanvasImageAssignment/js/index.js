var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.lineWidth=2;

var x_axis=-50;
var y_axis=20;

for (var i=0;i<300;i++){
  ctx.beginPath();
  ctx.moveTo(x_axis,0);

  ctx.bezierCurveTo(x_axis+0,y_axis+0, x_axis+45, y_axis+0, x_axis+0, y_axis+25);
  ctx.bezierCurveTo(x_axis+0, y_axis+25, x_axis-50, y_axis+42, x_axis+0, y_axis+60);
  ctx.bezierCurveTo(x_axis+0, y_axis+60, x_axis+50, y_axis+75,x_axis+0, y_axis+90);
  ctx.bezierCurveTo(x_axis+0, y_axis+90, x_axis-40, y_axis+105, x_axis+0, y_axis+115);
  ctx.bezierCurveTo(x_axis+0, y_axis+115, x_axis+67, y_axis+132, x_axis+10, y_axis+135);

  ctx.stroke();
  x_axis += 10;
}
