var min=200;
var max=500;
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = Math.floor(Math.random() *(max-min+1)  + min);
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // check if  bugs collides with player
    if (this.x < 500) {
        this.x += this.speed * dt;
    } else {
        this.x = -100;
        this.speed=400;
       // this.speed = Math.floor(Math.random*(max- min+1 ) +min);
    }
    
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y) {
    
    this.sprite = 'images/char-boy.png';
    this.x=x;
    this.y=y;
};
Player.prototype.update = function () {
    // must   declare the function
    for (var i = 0; i < 3; i++) {
        if (this.y == allEnemies[i].y) {

            if(this.x < allEnemies[i].x + 101){

                if (this.x + 101 > allEnemies[i].x){

                     this.reset();
                }
            }
        }
    }
};
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Player.prototype.reset = function () {
    this.x = 200;
    this.y = 400;
};
Player.prototype.handleInput = function (click) {
    switch (click) {
    case 'up':
        if (this.y > 40) {
            this.y -= 90;
        }
        else{
            this.reset();
        }
        break;
        case 'down':
        if (this.y < 400) {
            this.y += 90;
        }
        break;
        case 'left':
        if (this.x > 0) {
            this.x -= 100;
        }
        break;
        case 'right':
        if (this.x < 400) {
            this.x += 100;
        }
        break;
    }
};
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var a = new Enemy(0,40);
var b = new Enemy(0,130);
var c = new Enemy(0,220);

var allEnemies = [a,b,c];
// Now instantiate your objects.
var player = new Player(200,400);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});