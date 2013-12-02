window.game || (window.game = {});

window.game || (window.game = {});

window.game.title = "Tic Tac Toe";

window.game.asset = "ttt";

window.game.description = "This is Tic Tac Toe";

window.game.type = "c";

window.game.getInitialBoard = function(p) {
  return "%20%20%20%20%20%20%20%20%20";
};

window.game.getDimensions = function(p) {
  return [p.width, p.height];
};


window.game.notifier = notifier = 
     function notifier(canvas, conf) {
          gameNotifier.call(this);
          this.canvas = canvas.getContext("2d");
         this.conf = conf;
     };

     notifier.prototype = new gameNotifier();

     notifier.prototype.constructor = notifier;

     notifier.prototype.drawBoard = function(board, game) {
          var change, char, color, column, index, me, row, start, x_pixels, xpos, y_pixels, ypos, i, j, ref, ref1, results;
          me = this;

          //temp set up
          this.canvas.width = document.getElementById('GCAPI-main').width;
          this.canvas.height = document.getElementById('GCAPI-main').height;


         console.log("Board: '"+board+"'");
         x_pixels = Math.floor(this.canvas.width / this.conf.width);
         y_pixels = Math.floor(this.canvas.height / this.conf.height);
         xpos = 0;
         ypos = 0;
         results = [];

         for (row = i = 0, ref = this.conf.height - 1; 0 <= ref ? i <= ref : i >= ref; row = 0 <= ref ? ++i : --i) {
               xpos = 0;
               start = row * this.conf.width;
               for (column = j = 0, ref1 = this.conf.width - 1; 0 <= ref1 ? j <= ref1 : j >= ref1; column = 0 <= ref1 ? ++j : --j) {
                    index = start + column;
                    char = board[index];
                    change = x_pixels * 0.1;
                    color = "#FFF";
                    if (char === "X" || char === "x") {
                         color = "#00F";
                    } else if (char === "O" || char === "o") {
                         color = "#F00";
                    }
              
                    this.canvas.fillStyle = "#7F7F7F";
                    this.canvas.fillRect(xpos,ypos,x_pixels,y_pixels);
                    
                    if (color == "#F00") {                    
                         this.canvas.fillStyle=color;
                         this.canvas.strokeStyle='#000';
                         this.canvas.fillRect(xpos+change,ypos+change,x_pixels - (change * 2), y_pixels - (change*2));
                         this.canvas.strokeRect(xpos+change,ypos+change,x_pixels - (change * 2), y_pixels - (change*2));
                    } else {
                         this.canvas.beginPath();
                         this.canvas.arc(xpos + (x_pixels / 2), ypos + (y_pixels / 2), (x_pixels / 2) - change, 0, Math.PI * 2, false);
                         this.canvas.closePath();
                         this.canvas.fillStyle=color;
                         this.canvas.fill();
                    }

                    xpos += x_pixels;
               }
               results.push(ypos += y_pixels);
          }
          return results;
     };

     notifier.prototype.drawMoves = function(data, game) {
          console.log("drawMoves");
          //this.canvas.addEventListener("click", halmaOnClick, false);
     };