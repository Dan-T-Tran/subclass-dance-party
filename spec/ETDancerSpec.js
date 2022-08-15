describe('ETDancer', function() {

  var ETDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    ETDancer = new makeETDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(ETDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(ETDancer.$node, 'toggle');
    ETDancer.step();
    expect(ETDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(ETDancer, 'step');
      expect(ETDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(ETDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(ETDancer.step.callCount).to.be.equal(2);
    });
  });
});
