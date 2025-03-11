
// function myFunction(x) {
//   x.classList.toggle("active-two")
//   var navbarLinks = document.getElementById("nav-menu");
//   if (navbarLinks.style.display === "block") {
//     navbarLinks.style.display = "none";
//   }
//   else{
//     navbarLinks.style.display = "block";
//   }
// }

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

