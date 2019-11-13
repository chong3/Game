function HandleGuardDeskCollision(){
  if(GUARD.x > DESK.x && GUARD.x < (DESK.x + DESK.width) && GUARD.y > DESK.y && GUARD.y < (DESK.y + DESK.height)){
    return false;
  }
    return true;
}

function InitializeDesk(){

  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  var yInterval = GAME.canvas.height / 6;

  var DESK = {
    initialized : true,
    x : [],
    y : [100, yInterval + 100, yInterval*2 + 50, yInterval*3 + 50, yInterval*4 + 50, yInterval*5 + 50],
    width: 45,
    height: 45,
    src : "pics/Table.png"
  };
  RandomizeDesk();
}

function RenderDesk(context) {
  if (GAME.level != GAME.lastLevel) {
    DESK.x = [];
    RandomizeDesk();
    GAME.lastLevel = GAME.level;
  }
  var deskimg = new Image();
  deskimg.src = DESK.src;
  var count = 0;
  for(var k = 0; k < DESK.y.length; k++)
  {
    for(var i = count * 3; i < count * 3 + 3; i++)
    {
      for(var j = 0; j <= 3; j++)
      {
          context.drawImage(deskimg, DESK.x[i] + j * DESK.width, DESK.y[k], DESK.width, DESK.height);
      }
      count++;
    }
    count = 0;
  }
}

function RandomizeDesk(context){
  for(var i = 0; i < 15; i++)
  {
    DESK.x[i] = Math.random() * 1000;
    if(DESK.x[i] + DESK.width * 3 > GAME.canvas.width)
    {
      DESK.x[i] -= DESK.width * 4
    }
  }
}
