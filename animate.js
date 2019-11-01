function HandlePlayerMovement(){
  //UP
  if(CONTROLS.player.up == true && PLAYER.y >= 0){
    PLAYER.y -= PLAYER.speed;
  }
  //RIGHT
  if(CONTROLS.player.right == true && PLAYER.x <= (GAME.canvas.width-PLAYER.width)){
    PLAYER.x += PLAYER.speed;
  }
  //LEFT
  if(CONTROLS.player.left == true && PLAYER.x >= 0){
    PLAYER.x -= PLAYER.speed;
  }
  //DOWN
  if(CONTROLS.player.down == true && PLAYER.y <= GAME.canvas.height - PLAYER.height){
    PLAYER.y += PLAYER.speed;
  }
}

function HandleGuardMovement(){

  //Create an initial vector
  var initVector = Math.floor(Math.random() * 360);
  RotateGuard()
  //Proceed until a wall is hit

  //Create a new vector

  //Repeat

}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  if (GAME.started) {
    // 1 - Reposition the objects
    HandlePlayerMovement();
    //HandleGuardMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 1000, 1000);

    // 3 - Draw new items
    RenderPlayer(context);
//    RenderDesks(context);
//    RenderChairs(context);
    RenderGuard(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}
window.requestAnimationFrame(runGame);
