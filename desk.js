function HandleGuardDeskCollision(){
  if(GUARD.x > DESK.x && GUARD.x < (DESK.x + DESK.width) && GUARD.y > DESK.y && GUARD.y < (DESK.y + DESK.height)){
    return false;
  }
    return true;
}

function InitializeDesk(xPos, yPos){

  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  var DESK = {
    initialized: false,
    x : xPos,
    y : yPos,
    width: 32,
    height: 32,
    latest : {
          x : 0,
          y : 0
      },
    src : "pics/Table.png"
  };
}

function RenderDesk(context) {
  if (!DESK.initialized) {
    return;
  }

  var deskimg = new Image();
  deskimg.src = DESK.src;
  context.drawImage(deskimg, DESK.x, DESK.y, DESK.width, DESK.height);
};
