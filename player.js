var p1y = 0;


function InitializePlayer(multiplayer){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  
    if(multiplayer = true){
      PLAYER = (x = p1x, y = p1y, caught = false, onclue = false, multiplayer = true, source = "player.png");
    else {
      PLAYER = (x = p1x, y = p1y, caught = false, onclue = false, multiplayer = false, source = "player.png");
    }
};
