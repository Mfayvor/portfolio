
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

