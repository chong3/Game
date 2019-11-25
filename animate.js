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
  checkCollision();
}

function drawHints(ctx){
  var image = new Image();
  image.src = "pics/Clue.png";
  for(var i = 0; i < ANSWER.clue.length; i++){
    ctx.drawImage(image, ANSWER.clue[i].x, ANSWER.clue[i].y, 20, 20);
  }
}

function checkCollision(){
  for(var i = 0; i < ANSWER.clue.length; i++){
    if(PLAYER.x == ANSWER.clue[i].x && PLAYER.y == ANSWER.clue[i].y){
      alert(ANSWER.clue[i].letter);
    }
  }
}

var vector = Math.floor(Math.random() * 360);

function HandleGuardMovement(){
  /*
  if(!HandleGuardCollision()){
    GUARD.x += GUARD.speed * Math.sin(vector);
    GUARD.y -= GUARD.speed * Math.cos(vector);
  }
  else {
    vector = Math.floor(Math.random() * 360);
    GUARD.x += GUARD.speed * Math.sin(vector);
    GUARD.y -= GUARD.speed * Math.cos(vector);
  }
  */
  var checkNum = checkGuard();
  if(checkNum == 0)
  {
    GUARD.x += GUARD.speed;
  }
  else if(checkNum == 1)
  {
    GUARD.y -= GUARD.speed;
  }
  else if(checkNum == 2)
  {
    GUARD.x -= GUARD.speed;
  }
  else {
    GUARD.y += GUARD.speed;
  }
}
function HandleBeamMovement(){
  BEAM.x = GUARD.x;
  BEAM.y = GUARD.y;
}

function playerTopBetweenBeamHeight(){
  if (((PLAYER.y+PLAYER.height/2) > BEAM.y-BEAM.height) &&
      ((PLAYER.y+PLAYER.height/2) < BEAM.y+BEAM.height)){
  return true;
  }
  return false;
}

function playerBottomBetweenBeamHeight(){
  if (((PLAYER.y-PLAYER.height/2) > BEAM.y-BEAM.height) &&
      ((PLAYER.y-PLAYER.height/2) < BEAM.y+BEAM.height)){
  return true;
  }
  return false;
}
//rocket width = 60
//rocket height = 120
function playerLeftBetweenBeamWidth(){
  if (((PLAYER.x-PLAYER.width/2) > BEAM.x- BEAM.width/2) &&
      ((PLAYER.x-PLAYER.width/2) < BEAM.x+  BEAM.width/2)){
  return true;
  }
return false;
}

function playerRightBetweenBeamWidth(){
  if (((PLAYER.x+PLAYER.width/2) > BEAM.x-BEAM.width/2) && ((PLAYER.x+PLAYER.width/2) < BEAM.x+BEAM.width/4)){
    return true;
  }
  return false;
}

function checkPlayerInBeam(){

  // if in beam, game.started = false;
  if (PLAYER.x-60 < BEAM.x + BEAM.width  && PLAYER.x-60 + VISION.width  > BEAM.x &&
		PLAYER.y-50 < BEAM.y + BEAM.height && PLAYER.y-50 + VISION.height > BEAM.y) {
      GAME.started = false;
    }
}


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {
    // 1 - Reposition the objects
    HandlePlayerMovement();
    HandleGuardMovement();
    HandleBeamMovement();
    checkPlayerInBeam();
    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 1000, 1000);

    // 3 - Draw new items
    RenderPlayer(context);
    RenderDesk(context);
  //  RenderChairs(context);

    RenderGuard(context);
    RenderBeam(context);
    drawHints(context);
  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}
window.requestAnimationFrame(runGame);
