var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="dancer blinkyDancer">');

  this.oldStep = this.step;
  this.timeBetweenSteps = timeBetweenSteps
  // this.isRunning = false;

  this.image();

  this.setPosition(top, left);

  this.mouseOver();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // if (this.isRunning === false) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  // }
  this.$node.toggle();
}

makeBlinkyDancer.prototype.image = function() {
  $(this.$node).attr('src', 'assets/capedBaldy.png');
}

makeBlinkyDancer.prototype.setPosition = function(top, left) {
  var skyer = ((13 + (Math.random() * 35)).toString() + '%');

  var ETstyle = {
    top: skyer,
    left: left * 0.95
  };

  this.$node.css(ETstyle);;
}

makeBlinkyDancer.prototype.mouseOver = function() {
  var audio2 = new Audio('assets/onePunch.mp3');

  $(this.$node).mouseover(function() {
    $(this.$node).css({'width': '150px'});
    // this.isRunning = true;
    audio2.play();
  });
  $(this.$node).mouseout(function() {
    $(this.$node).css({'width': '80px'});
    audio2.pause();
    audio2.currentTime = 0;
    // this.isRunning = false;
    // this.step();
  });
}