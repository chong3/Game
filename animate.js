function HandlePlayerMovement(){
  if(CONTROLS.player.up = true && PLAYER.y !< 0){
    PLAYER.y--;
  }
  if(CONTROLS.player.right = true && PLAYER.x !>GAME.canvas.width){
    PLAYER.x++;
  }
  if(CONTROLS.player.left = true && PLAYER.x !< 0){
    PLAYER.x--;
  }
  if(CONTROLS.player.down = true && PLAYER.y !> GAME.canvas.height){
    PLAYER.y++;
  }
}

}
function HandleGuardMovement(){

}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handlePlayerMovement();
    HandleGuardMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 1000, 1000);

    // 3 - Draw new items
    RenderPlayer(context);
    RenderGuard(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}
window.requestAnimationFrame(runGame);
