$(".menu__button").click(function(){
    $(".menu__nav").slideToggle();
});

$( window ).resize(function() {
  if ($(window).width() > 768) $(".menu__nav").css("display","flex");
    else $(".menu__nav").css("display","none");
});
