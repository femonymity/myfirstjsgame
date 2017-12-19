(function() {
  //global namespace
  window.game = {};

  //data
  game.TILES = 32;
  game.cvs = document.getElementById('canvas');
  game.ctx = game.cvs.getContext('2d');

  game.input = {
    up: false,
    left: false,
    down: false,
    right: false,
    space: false,
  }

  game.player = {
    image: new Image(),
    x: 0,
    y: 0,
    hp: 10,
    max_hp: 10,
  };
  game.player.image.src = 'images/gamecat.png';

  game.enemies = {};

}())
