// toggle menu/navbar script 
$('.hamburger').click(function(x){
  $('#nav-menu').toggleClass("active");
  $('.hamburger-two').toggleClass("active")
});


$(document).ready(function() {
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.header').addClass("sticky");
    }else{
      $('.header').removeClass("sticky");
    }
    if(this.scrollY > 500){
      $('.scroll-up-btn').addClass("show");
    }else{
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide up script 
  $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
  });

  // typing animation script 
  var typed = new Typed(".typing",{
    strings: ["Designer", "Developer", "Blogger", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2",{
    strings: ["Designer", "Developer", "Blogger", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

});


// owl carousel script 
$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoPlayTime: 2000,
  autoPlayHoverPause: true,
  responsive: {
    0:{
      items: 1,
      nav: false
    },
    600:{
      items: 2,
      nav: false
    },
    1000:{
      items: 3,
      nav: false
    }
  }
});