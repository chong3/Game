function InitializeGuard(){

  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  GUARD = {
    initialized: true,
    directions : [0, 90, 180, 270],
    x : 10,
    y : 10,
    width : 50,
    height : 75,
    speed : 5,
    currentDirection : 0,
    latest : {
        x : 0,
        y : 0
    },
    src : "pics/guardsolo.png"
  };
  GUARD.currentDirection = Math.trunc(Math.random() * 3);
}

function InitializeBeam(){
  BEAM = {
    initialized : true,
    x : GUARD.x,
    y : GUARD.y,
    theta : 180,
    width : 50,
    height : 70,
    latest : {
        x : 0,
        y : 0
    },
    src : ""
  };

}

function HandleGuardCollision(){
  if(GUARD.y > 0 && GUARD.x < (GAME.canvas.width-GUARD.width) && GUARD.x > 0 && GUARD.y < (GAME.canvas.height - GUARD.height))
  {
    return false;
  }
    return true;
}



// Rotate rotates a point around
// cx, cy   :   The central point
// x, y     :   The coordinates of point to be rotatedPoint
// angle    :   Angle in degrees of rotation
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
}

function RenderGuard(context) {
  var guardimg = new Image();
  guardimg.src = GUARD.src;
  if (!GUARD.initialized) {
    return;
  }
  context.drawImage(guardimg, GUARD.x, GUARD.y, GUARD.width, GUARD.height);
}
function RenderBeam(context){
  context.beginPath();
  context.moveTo(BEAM.x, BEAM.y);
  context.lineTo(BEAM.x + BEAM.width / 2, BEAM.y + BEAM.height);
  context.lineTo(BEAM.x - BEAM.width / 2, BEAM.y + BEAM.height);
  context.closePath();
}
function checkGuard(){
  var random;
  var list;
  if(GUARD.x - GUARD.width <= 0 && GUARD.currentDirection == 2)
  {
    if(!(GUARD.y - GUARD.height <= 0) && !(GUARD.y + GUARD.height >= GAME.canvas.height))
    {
      list = [0, 1, 3];
    }
    else if(!(GUARD.y - GUARD.height <= 0))
    {
      list = [0, 1];
    }
    else if(!(GUARD.y + GUARD.height >= GAME.canvas.height))
    {
      list = [0, 3];
    }
    random =  Math.trunc(Math.random() * list.length);
    GUARD.currentDirection = list[random];
    return GUARD.currentDirection;
  }
  else if(GUARD.x + GUARD.width >= GAME.canvas.width && GUARD.currentDirection == 0)
  {
    if(!(GUARD.y - GUARD.height <= 0) && !(GUARD.y + GUARD.height >= GAME.canvas.height))
    {
      list = [1, 2, 3];
    }
    else if(!(GUARD.y - GUARD.height <= 0))
    {
      list = [1, 2];
    }
    else if(!(GUARD.y + GUARD.height >= GAME.canvas.height))
    {
      list = [2, 3];
    }
    random =  Math.trunc(Math.random() * list.length);
    GUARD.currentDirection = list[random];
    return GUARD.currentDirection;
  }
  else if(GUARD.y - GUARD.height <= 0 && GUARD.currentDirection == 1)
  {
    if(!(GUARD.x - GUARD.width <= 0) && !(GUARD.x + GUARD.width >= GAME.canvas.width))
    {
      list = [0, 2, 3];
    }
    else if(!(GUARD.x - GUARD.width <= 0))
    {
      list = [0, 3];
    }
    else if(!(GUARD.x + GUARD.width >= GAME.canvas.width))
    {
      list = [2, 3];
    }
    random =  Math.trunc(Math.random() * list.length);
    GUARD.currentDirection = list[random];
    return GUARD.currentDirection;
  }
  else if (GUARD.y + GUARD.height >= GAME.canvas.height && GUARD.currentDirection == 3) {
    if(!(GUARD.x - GUARD.width <= 0) && !(GUARD.x + GUARD.width >= GAME.canvas.width))
    {
      list = [0, 1, 2];
    }
    else if(!(GUARD.x - GUARD.width <= 0))
    {
      list = [0, 1];
    }
    else if(!(GUARD.x + GUARD.width >= GAME.canvas.width))
    {
      list = [1, 2];
    }
    random =  Math.trunc(Math.random() * list.length);
    GUARD.currentDirection = list[random];
    return GUARD.currentDirection;
  }
  /*
  else if(GUARD.x + GUARD.width >= GAME.canvas.width)
  {
    list = RotateGuard(GAME.canvas.width, y, x, y, 180);
    GUARD.x -= GUARD.speed * Math.sin(list[0]);
  }
  if(GUARD.y + GUARD.height <= 0)
  {
    list = RotateGuard(x, 0, x, y, 180);
    GUARD.y += GUARD.speed * Math.cos(list[1]);
  }
  if(GUARD.y - GUARD.height >= GAME.canvas.height)
  {
    list = RotateGuard(x, GAME.canvas.height, x, y, 180);
    GUARD.y -= GUARD.speed * Math.cos(list[1]);
  }
  */
  else{
    return GUARD.currentDirection;
  }
}
