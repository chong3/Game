

function InitializeGuard(multi){

  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  GUARD = {
    initialized: true,
    spotAng: 0,
    x : 0,
    y : 0,
    width: 75,
    height: 100,
    speed: 5,
    latest : {
        x : 0,
        y : 0
    },
    src : "pics/guard.png"
  };
}

function RotateGuard(cx, cy, x, y, angle) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}

// RotateAroundOrigin
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
function RotateAroundOrigin(x, y, angle) {
  return Rotate(0, 0, x, y, angle);

function RenderGuard(context) {
  if (!GUARD.initialized) {
    return;
  }
  var guardimg = new Image();
    playerimg.src = GUARD.src;
    context.drawImage(guardimg, GUARD.x, GUARD.y, GUARD.width, GUARD.height);
};
}
