$('.hamburger').click(function(){
    $('.nav-offcanvas').css('transform','translateX(0)')
});
$('.close').click(function(){
    $('.nav-offcanvas').css('transform','translateX(100%)')
});
$('.counter').counterUp({
    delay: 10,
    time: 800
  });
  $('.counter').addClass('animated fadeInDownBig');
  $('h3').addClass('animated fadeIn');

  window.addEventListener("scroll", function(){
    var taleh = document.querySelector(".nav-bar");
    taleh.classList.toggle("sticky", window.scrollY > 0);
})
