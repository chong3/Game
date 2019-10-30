var CONTROLS = {
  player : {
    up : false,
    down : false,
    left : false,
    right : false
  },
  pane : {
    open: false
  }
}

if (PLAYER.multiplayer == false){

  document.addEventListener('keydown', function Event(){
    switch (event.key) {
      case "w":
        CONTROLS.player.up = true;
        break;
      case "s":
        CONTROLS.player.down = true;
        break;
      case "a":
        CONTROLS.player.left = true;
        break;
      case "d":
        CONTROLS.player.right = true;
        break;
      default:
        break;
      }
    });

  document.addEventListener('keyup', function Event(){
    switch (event.key) {
      case "w":
        CONTROLS.player.up = false;
        break;
      case "s":
        CONTROLS.player.down = false;
        break;
      case "a":
        CONTROLS.player.left = false;
        break;
      case "d":
        CONTROLS.player.right = false;
        break;
      default:
        break;
    }
  });
}

else if (PLAYER.multiplayer = true){

  document.addEventListener('keydown', function Event(){
    switch (event.key) {
      case "w":
        CONTROLS.player.up = true;
        break;
      case "ArrowDown":
        CONTROLS.player.down = true;
        break;
      case "a":
        CONTROLS.player.left = true;
        break;
      case "ArrowRight":
        CONTROLS.player.right = true;
        break;
      default:
        break;
    }
  });

  document.addEventListener('keyup', function Event(){
    switch (event.key) {
      case "w":
        CONTROLS.player.up = false;
        break;
      case "ArrowDown":
        CONTROLS.player.down = false;
        break;
      case "a":
        CONTROLS.player.left = false;
        break;
      case "ArrowRight":
        CONTROLS.player.right = false;
        break;
      default:
        break;
    }
  });
}
