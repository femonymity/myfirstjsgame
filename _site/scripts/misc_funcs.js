(function(){
  game.movePlayer = function (){
    if (game.input.left){
      game.player.x -= game.TILES;
      game.input.left = false;
    };
    if (game.input.up){
      game.player.y -= game.TILES;
      game.input.up = false;
    };
    if (game.input.right){
      game.player.x += game.TILES;
      game.input.right = false;
    };
    if (game.input.down){
      game.player.y += game.TILES;
      game.input.down = false;
    };
  };

  game.drawSprite = function (sprite) {
    // ctx.beginPath();
    // ctx.fillStyle = '#b7521e';
    // ctx.fillRect(x, y, TILE, TILE);
    game.ctx.drawImage(sprite.image, sprite.x, sprite.y);
  };

}());
