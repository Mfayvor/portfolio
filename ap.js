
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
  })
});

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