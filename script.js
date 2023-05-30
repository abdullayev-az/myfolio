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
    $('.projects-main').html("<div class='projectbars bank'><div class='projectone'><img src='imgs/pc-mybank.png'><a href='https:abdullayev-az.github.io/MyBank/' target='_blank' class='livedemo'>Live Demo</a></div></div>");
})
$('.item2').click(function(){
    $('.sidebar').fadeIn();
    $('.projects-main').html("<div class='projectbars'><div class='projectone'><img src='imgs/pc-melodra.png'><a href='https:abdullayev-az.github.io/MelaDora/' target='_blank' class='livedemo'>Live Demo</a></div></div>");
})
$('.item3').click(function(){
    $('.sidebar').fadeIn();
    $('.projects-main').html("<div class='projectbars'><div class='projectone'><img src='imgs/pc-seda.png'><a href='https:abdullayev-az.github.io/seda-esas/' target='_blank' class='livedemo'>Live Demo</a></div></div><div class='projectbars'><div class='projectone'><img src='imgs/pc-garanti.png'><a href='https:abdullayev-az.github.io/garanti.az/' target='_blank' class='livedemo'>Live Demo</a></div></div>");
})
$('.item4').click(function(){
    $('.sidebar').fadeIn();
        $('.projects-main').html("<div class='projectbars'><div class='projectone'><img src='imgs/pc-garanti.png'><a href='https:abdullayev-az.github.io/garanti.az/' target='_blank' class='livedemo'>Live Demo</a></div></div>");
})
$('.item5').click(function(){
    $('.sidebar').fadeIn();
        $('.projects-main').html("<div class='projectbars'><div class='projectone'><img src='imgs/pc-deniz.png'><a href='https:abdullayev-az.github.io/deniz-mall/ target='_blank' class='livedemo'>Live Demo</a></div></div><div class='projectbars'><div class='projectone'><img src='imgs/pc-fashion.png'><a href='https:abdullayev-az.github.io/Male_fashion/ target='_blank' class='livedemo'>Live Demo</a></div></div>");
  
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
})
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

