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

(function () {
    var options = {
        whatsapp: "994997200067",
        call_to_action: "Salam nece komek ede bierem?",
        position: "left",
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
