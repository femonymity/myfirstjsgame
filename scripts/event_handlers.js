(function (){
  //for grabbing key input
  document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) { //left
      game.input.left = true;
    } else if(event.keyCode == 38) { //up
      game.input.up = true;
    } else if(event.keyCode == 39) { //right
      game.input.right = true;
    } else if(event.keyCode == 40) { //down
      game.input.down = true;
    } else if(event.keyCode == 32) { //spacebar
      game.input.space = true;
    }
  });

  //for grabbing touch input
  document.addEventListener('touchstart', function(event) {
    if(event.touches.length > 1) {
      return;
    }
    let t = event.touches[0];
    let x = t.pageX;
    let y = t.pageY;
    let dslope = y * game.window_width / game.window_height;
    let uslope = game.window_width - dslope
    if (false) { //touching center - "spacebar" effect
      //pass
    } else if(x < dslope && x < uslope) {
      game.input.left = true; //left
    } else if(x > dslope && x < uslope) {
      game.input.up = true; //up
    } else if(x > dslope && x > uslope) {
      game.input.right = true; //right
    } else if(x < dslope && x > uslope) {
      game.input.down = true; //down
    };
  });
}())
