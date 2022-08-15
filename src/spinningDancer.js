var makeSpinningDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="dancer spinningDancer"></img>')
  this.image();
  this.setPosition(top, left);
  this.rotation = 0;
  this.timeBetweenRotation = 20;

  // this.mouseOver();
}

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.image = function() {
  $(this.$node).attr('src', 'assets/alien-lil-mayo.gif');
};

makeSpinningDancer.prototype.step = function(rotation) {
  setTimeout(this.step.bind(this, this.rotation), this.timeBetweenRotation);
  this.rotation += 5;
  if (this.rotation >= 360) {
    this.rotation = 0;
  }
  var shipSettings = {
    transform: ('rotate(' + this.rotation + 'deg)'),
    transformOrigin: 'top left'
    // transformOrigin: '0% 100%'
  };
  $(this.$node).css(shipSettings);
}

// 13% < x < 52%

makeSpinningDancer.prototype.setPosition = function(top, left) {
  // var skyMath = 13 + (Math.random() * 39);
  var skyer = ((13 + (Math.random() * 35)).toString() + '%');

  var ETstyle = {
    top: skyer,
    left: left * 0.95
  };

  this.$node.css(ETstyle);
};

makeSpinningDancer.prototype.mouseOver = function() {
  var audio2 = new Audio('assets/gasgasgas.mp3');

  $(this.$node).mouseover(function() {
    $(this.$node).css({'width': '150px'});
    this.timeBetweenRotation = 5;
    // this.isRunning = true;
    audio2.play();
  });
  $(this.$node).mouseout(function() {
    $(this.$node).css({'width': '80px'});
    audio2.pause();
    audio2.currentTime = 0;
    this.timeBetweenRotation = 20;
    // this.isRunning = false;
    // this.step();
  });
}