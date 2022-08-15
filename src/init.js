$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer spin


    // make a dancer with a random position

    // attempting to make audio play on mouseover

    // var audio = new Audio('assets/wow.mp3');

    var dancer = new dancerMakerFunction(
      $("body").height() * (Math.random() * 0.95),
      $("body").width() * (Math.random() * 0.95),
      100 + (Math.random() * 900)
    );

    // var audio = new Audio('assets/wow.mp3');

    $(dancer.$node).mouseover(function() {
      $(dancer.$node).css({'width': '150px'});
      // audio.play();
    });
    $(dancer.$node).mouseout(function() {
      $(dancer.$node).css({'width': '80px'});
      // audio.pause();
      // audio.currentTime = 0;
    });

    $('body').append(dancer.$node);
  });

  $('.title').on('click', function() {
    document.querySelectorAll(".dancer").forEach(img => img.remove());

    // $('body').remove('.dancer');
  })
});

