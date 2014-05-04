(function() {
  $('.menu-toggle').on('click', function(e) {
    var target;
    e.preventDefault();
    target = $(this).toggleClass('open').data('toggle');
    return $("#" + target).toggleClass('open');
  });

}).call(this);
