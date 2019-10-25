var CONTROLS = {
  player : {
    up : false,
    down : false,
    left : false,
    right : false
  }
};


if player.multiplayer == false{

document.addEventListener('keydown', function(event) {
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
};

document.addEventListener('keyup', function(event) {
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
};
}
