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

  var DESK = {
    initialized : true,
    x : [],
    y : [],
    width: 45,
    height: 45,
    src : "pics/Table.png"
  };
  RandomizeDeskX();
  RandomizeDeskY();
}

function RenderDesk(context) {
  if (GAME.level != GAME.lastLevel) {
    DESK.x = [];
    RandomizeDeskX();
    RandomizeDeskY();
    GAME.lastLevel = GAME.level;
  }
  var deskimg = new Image();
  deskimg.src = DESK.src;
  var i = 0;
  var k = 0;
  var count = 0;
  for(var k = 0; k < DESK.y.length; k++)
  {
    for(i = count; i < count + 10; i++)
    {
      context.drawImage(deskimg, DESK.x[i], DESK.y[i], DESK.width, DESK.height);

    }
    count = i;
  }
}

function RandomizeDeskX(context){
  for(var i = 0; i < 25; i++)
  {
    DESK.x[i] = Math.trunc(Math.random() * 1000);
    if(DESK.x[i] + DESK.width > GAME.canvas.width)
    {
      DESK.x[i] -= DESK.width
    }
  }
}

function RandomizeDeskY(context){

  for(var i = 0; i <= 25; i++)
  {
    DESK.y[i] = Math.trunc(Math.random() * GAME.canvas.height);
    if(DESK.y[i] + DESK.height > GAME.canvas.height)
    {
      DESK.y[i] -= DESK.height
    }
  }
}

function randomizeString(){
  var length = Math.random() * 4 + 4;
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var charactersLength = characters.length;
  for(var i = 0; i < length; i++){
    ANSWER.string += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
}

function randomizeHints(){
  var xCoor = 0;
  var yCoor = 0;
  for(var i = 0; i < ANSWER.string.length; i++){
    xCoor = Math.floor(Math.random() * GAME.canvas.width);
    yCoor = Math.floor(Math.random() * GAME.canvas.height);
    ANSWER.clue.push(
      {
        x : xCoor,
        y : yCoor,
        letter : ANSWER.string.charAt(i)
      });
  }
}
