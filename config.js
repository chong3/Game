var CONTROLS = {
  player : {
    up : false,
    down : false,
    left : false,
    right : false
  }
};

var GAME = {
  canvas : {
    width : 1000,
    height : 1000
  },
  started : true,
  level : 1
};

var PLAYER = {
  initialized: false,
  x : 0,
  y : 0,
  caught : false,
  onclue : false,
  multiplayer : true,
  src : ""};

if (PLAYER.multiplayer == false){

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
else if (PLAYER.multiplayer = true){

  document.addEventListener('keydown', function(event) {
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
  };

  document.addEventListener('keyup', function(event) {
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
  };
}
