var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 50;
var angle = 0;

function drawObject() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var x = centerX + Math.cos(angle) * radius;
  var y = centerY + Math.sin(angle) * radius;

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, 2 * Math.PI);
  ctx.fillStyle = "red";
  ctx.fill();
  ctx.closePath();

  angle += 0.05;

  requestAnimationFrame(drawObject);
}

drawObject();