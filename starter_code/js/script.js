window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };



  function startGame() {
    game = new GameCanvas();
    game.redenrizado();
    // game.draw();
  }

};



