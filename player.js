var p1x = 0;
var p1y = 0;



function InitializePlayer(multi){

  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  PLAYER = {
    initialized: true,
    x : p1x,
    y : p1y,
    latest : {
        x : PLAYER.x,
        y : PLAYER.y,
    },
    caught : false,
    onclue : false,
    multiplayer: multi,
    src : "playersolo.png"
  };
}

  function RenderPlayer(context) {
    if (!PLAYER.initialized) {
      return;
    }
    var playerimg = new Image(7, 10);
    playerimg.src = PLAYER.src;
    context.drawImage(playerimg, PLAYER.latest.x, PLAYER.latest.y, 75, 100);
};
