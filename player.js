
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

function renderPlayerVision(context){
  context.beginPath();
  context.lineWidth = "6";
  context.strokeStyle = "yellow";
  context.arc(PLAYER.x+14, PLAYER.y+13, 100, 0, 2 * Math.PI);
  context.stroke();
  context.closePath();
}

function RenderPlayer(context) {
  if (!PLAYER.initialized) {
    return;
  }

  var playerimg = new Image();
  playerimg.src = PLAYER.src;
  renderPlayerVision(context);
  context.drawImage(playerimg, PLAYER.x, PLAYER.y, PLAYER.width, PLAYER.height);
};
