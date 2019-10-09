

$(function() {
    $.scrollify({
      section : ".Page",
      scrollbars: true,
    });
    let windowWidth = $(window).width();

    if (windowWidth < 750){
      $.scrollify.destroy();
    }

  });


