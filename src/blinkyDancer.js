var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.oldStep = this.step;
  this.timeBetweenSteps = timeBetweenSteps

  // this.step();


};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // this.oldStep.call(this, this.timeBetweenSteps);
   setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.$node.toggle();
}
