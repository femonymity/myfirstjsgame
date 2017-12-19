(function () {
  loop = function () {
    game.window_width = window.innerWidth;
    game.window_height = window.innerHeight;

    let ctx = game.ctx;
    ctx.save();
    ctx.clearRect(0, 0, game.cvs.width, game.cvs.height);

    game.movePlayer();
    game.drawSprite(game.player);

    ctx.restore();
    window.requestAnimationFrame(loop);

  };

  //animation - call this every split second!
  window.requestAnimationFrame(loop);
}())
