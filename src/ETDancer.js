var makeETDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="dancer ETDancer"></img>');

  this.image();

  this.setPosition(top, left);

  // this.mouseOver();
}

makeETDancer.prototype = Object.create(makeDancer.prototype);
makeETDancer.prototype.constructor = makeETDancer;

makeETDancer.prototype.image = function() {
  $(this.$node).attr('src', 'assets/ETDance.gif');
};

makeETDancer.prototype.setPosition = function(top, left) {
  var grounder = ((60 + (Math.random() * 30)).toString() + '%')

  var ETstyle = {
    top: grounder,
    left: left
  };

  this.$node.css(ETstyle);
};

makeETDancer.prototype.mouseOver = function() {
  var audio2 = new Audio('assets/wow.mp3');

  $(this.$node).mouseover(function() {
    // $(this.$node).css({'width': '150px'});
    audio2.play();
  });
  $(this.$node).mouseout(function() {
    // $(this.$node).css({'width': '80px'});
    audio2.pause();
    audio2.currentTime = 0;
  });
}