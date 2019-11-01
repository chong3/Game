
function InitializePlayer(multi){

  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  PLAYER = {
    initialized: true,
    x : 500,
    y : 500,
    width: 75,
    height: 100,
    speed: 5,
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

  function RenderPlayer(context) {
    if (!PLAYER.initialized) {
      return;
    }
    var playerimg = new Image();
    playerimg.src = PLAYER.src;
    context.drawImage(playerimg, PLAYER.x, PLAYER.y, PLAYER.width, PLAYER.height);
};
