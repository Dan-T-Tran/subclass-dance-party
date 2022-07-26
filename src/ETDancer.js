var makeETDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="ETDancer"></img>');

  this.image();

  this.setPosition(top, left);
}

makeETDancer.prototype = Object.create(makeDancer.prototype);
makeETDancer.prototype.constructor = makeETDancer;

makeETDancer.prototype.image = function() {
  // $(this.$node).addClass('ETDancer');
  $(this.$node).attr('src', 'assets/ETDance.gif');
}

// makeETDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };

