function InitializePlayer(multi){

  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  PLAYER = {
    initialized: true,
    x : 500,
    y : 500,
    width: 25,
    height: 50,
    speed: 3,
    latest : {
        x : PLAYER.x,
        y : PLAYER.y,
    },
    caught : false,
    onclue : false,
    multiplayer: multi,
    src : "pics/playersolo.png"
  };

}

function renderPlayerVisionCircle(context){
  context.beginPath();
  context.lineWidth = "6";
  context.strokeStyle = "yellow";
  context.arc(PLAYER.x+14, PLAYER.y+13, 100, 0, 2 * Math.PI);
  context.stroke();
  context.closePath();
}

function renderPlayerVisionSquare(context){
  context.beginPath();
  context.lineWidth = "6";
  context.strokeStyle = "yellow";
  context.rect(PLAYER.x-60, PLAYER.y-50, 150, 150);
  context.stroke();
  context.closePath();
}

function RenderPlayer(context) {
  if (!PLAYER.initialized) {
    return;
  }

  var playerimg = new Image();
  playerimg.src = PLAYER.src;
  //renderPlayerVisionCircle(context);
  renderPlayerVisionSquare(context);
  context.drawImage(playerimg, PLAYER.x, PLAYER.y, PLAYER.width, PLAYER.height);
}
