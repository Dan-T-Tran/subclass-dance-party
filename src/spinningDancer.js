var makeSpinningDancer = function(top, left, timeBetweenSteps) {

  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="spinningDancer"></img>')
  this.image();
  this.setPosition(top, left);



}

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeSpinningDancer;

makeSpinningDancer.prototype.image = function() {
  $(this.node).attr('src', 'assets/alien-lil-mayo.gif');
};