AOS.init();
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
$('.item1').click(function(){
    $('.sidebar').fadeIn();
    $('html').css({'overflow-y':'hidden'});
    $('.bank').css({'display':'block'});
    $('.course').css({'display':'none'});
    $('.cargo').css({'display':'none'});
    $('.mall').css({'display':'none'});
    $('.shop').css({'display':'none'});
})
$('.item2').click(function(){
    $('.sidebar').fadeIn();
    $('html').css({'overflow-y':'hidden'});
    $('.course').css({'display':'block'});
    $('.bank').css({'display':'none'});
    $('.cargo').css({'display':'none'});
    $('.mall').css({'display':'none'});
    $('.shop').css({'display':'none'});
})
$('.item3').click(function(){
    $('.sidebar').fadeIn();
    $('html').css({'overflow-y':'hidden'});
    $('.cargo').css({'display':'block'});
    $('.bank').css({'display':'none'});
    $('.course').css({'display':'none'});
    $('.mall').css({'display':'none'});
    $('.shop').css({'display':'none'});
})
$('.item4').click(function(){
    $('.sidebar').fadeIn();
    $('html').css({'overflow-y':'hidden'});
    $('.mall').css({'display':'block'});
    $('.bank').css({'display':'none'});
    $('.course').css({'display':'none'});
    $('.cargo').css({'display':'none'});
    $('.shop').css({'display':'none'});
})
$('.item5').click(function(){
    $('.sidebar').fadeIn();
    $('html').css({'overflow-y':'hidden'});
    $('.shop').css({'display':'block'});
    $('.bank').css({'display':'none'});
    $('.course').css({'display':'none'});
    $('.cargo').css({'display':'none'});
    $('.mall').css({'display':'none'});
})
$('.barclose').click(function(){
    $('.sidebar').fadeOut();
    $('html').css({'overflow-y':'scroll'});
    TweenMax.to(".sidebar", 1.5, {
        width: "0%",
        ease: Expo.easeInOut
     }, 0.2)
     TweenMax.to(".projects-main", 1, {
        width: "0%",
        ease: Expo.easeOut
     }, 0.2)
});
$('.empty-click').click(function(){
    $('.sidebar').fadeOut();
    $('html').css({'overflow-y':'scroll'});
    TweenMax.to(".sidebar", 1.5, {
        width: "0%",
        ease: Expo.easeInOut
     }, 0.2)
     TweenMax.to(".projects-main", 1, {
        width: "0%",
        ease: Expo.easeOut
     }, 0.2)
})




const mediaQuery = window.matchMedia('(max-width: 576px)')
if (mediaQuery.matches) {
    $('.projects-item').click(function(){
        TweenMax.to(".sidebar", 1.5, {
            width: "100%",
            ease: Expo.easeOutIn
         }, 0.2)
         TweenMax.to(".projects-main", 1, {
            width: "80%",
            delay: 1,
            ease: Expo.easeIn
         }, 0.2)
         
    });
  }
   const mediaQuerys = window.matchMedia('(min-width: 576px)')
if (mediaQuerys.matches) {
    $('.projects-item').click(function(){
        TweenMax.to(".sidebar", 1.5, {
            width: "100%",
            ease: Expo.easeOutIn
         }, 0.2)
         TweenMax.to(".projects-main", 1, {
            width: "60%",
            delay: 1,
            ease: Expo.easeIn
         }, 0.2)
         
    });
  }

  const mediaQueryss = window.matchMedia('(min-width: 991px)')
  if (mediaQueryss.matches) {
      $('.projects-item').click(function(){
          TweenMax.to(".sidebar", 1.5, {
              width: "100%",
              ease: Expo.easeOutIn
           }, 0.2)
           TweenMax.to(".projects-main", 1, {
              width: "40%",
              delay: 1,
              ease: Expo.easeIn
           }, 0.2)
           
      });
    }







/* 
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
    })(); */

    $('.talk').click(function(){
       $('.chatbox').toggle('');
    });

    function togglebutton() {
        var x = document.getElementById("change");
        if (x.innerHTML === "Start Talking") {
          x.innerHTML = "Stop Talking";
        } else {
          x.innerHTML = "Start Talking";
        }
      }

