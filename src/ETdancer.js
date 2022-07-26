// var makeETDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);

//   this.image();
// }

// makeETDancer.prototype = Object.create(makeDancer.prototype);
// makeETDancer.prototype.constructor = makeETdancer;

// makeETDancer.prototype.image = function() {

// }

var makeETDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.oldStep = this.step;
  this.timeBetweenSteps = timeBetweenSteps

  // this.step();


};

makeETDancer.prototype = Object.create(makeDancer.prototype);
makeETDancer.prototype.constructor = makeETDancer;

makeETDancer.prototype.step = function() {
  // this.oldStep.call(this, this.timeBetweenSteps);
   setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.$node.toggle();
}
