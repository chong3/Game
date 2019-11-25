var GAME = {
  canvas : {
    width : 1000,
    height : 750
  },
  started : true,
  level : 1,
  lastLevel : 0
};

var PLAYER = {
  initialized: false,
  x : 0,
  y : 0,
  width: 0,
  height: 0,
  speed: 0,
  latest : {
        x : 0,
        y : 0
    },
  caught : false,
  onclue : false,
  multiplayer : false,
  src : ""
};

var VISION = {
  width : 150,
  height : 150,

};

var DESK = {
  initialized: false,
  x : [],
  y : [],
  width: 32,
  height: 32,
  latest : {
        x : 0,
        y : 0
    },
  src : "pics/Table.png"
};

var GUARD = {
  initialized: false,
  spotAng: 0,
  x : 0,
  y : 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};

var TEXTBOOK = {
  initialized: false,
  x : 0,
  y : 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};

var CHAIR = {
  initialized: false,
  x : 0,
  y : 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};

var CLUE = {
  initialized: false,
  x : 0,
  y : 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};

var ANSWER = {
  clue : [],
  string : ""
};

var BEAM = {
  initialized: false,
  x : 0,
  y : 0,
  width: 50,
  height : 200,
  theta: 0,
  latest : {
        x : 0,
        y : 0
    },
  src : ""
};
