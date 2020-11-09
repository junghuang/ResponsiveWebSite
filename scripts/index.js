var wid;
$(window).resize(function() {
  wid = $(document).width();
  if (wid > 750) {
    $("nav").addClass("navbar-fixed-top");
    $(".navbar").css({
      "background": "#32A7B8"
    });
    $(document).bind("scroll", scro)
  } else {
    $(".navbar").css({
      "background": "black"
    });
    $(document).unbind("scroll");
  }
})
$(document).bind("scroll",scro)
function scro(){
  var y = $(this).scrollTop();
  if (y == 0) {
    $(".navbar").css({
      "height": "72px !important",
      "background": "#32A7B8"
    });
  } else {
    $(".navbar").css({
      "height": "60px !important",
      "background": "black"
    });
  }
}
