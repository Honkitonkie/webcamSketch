function Balloon(i) {
  this.i = i
  this.x = Math.floor(random(-40,width));
  this.y = Math.floor(random(height, height*2));
  this.balloonRandom = Math.floor(random(0, balloonArray.length -1));
  this.speed = Math.floor(random(3, 6));
}

Balloon.prototype.show = function() {
for (let j = 0; j < balloonArray.length; j++) {
  image(balloonArray[this.balloonRandom], this.x, this.y); 
}
  this.y = this.y - this.speed;
};

Balloon.prototype.deleteOverflow = function() {
  if(this.y < -80 ) {
    balloons.splice(this.i, 1);
  }
};