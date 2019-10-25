let player = {
  x : 0,
  y: 0,
  caught: false,
  onclue: false,
  multiplayer: false
};

var p1x= 0;
var p1y = 0;


function InitializePlayer(multiplayer){
    let p1 = new player(p1x, p1y, false, false);
}
