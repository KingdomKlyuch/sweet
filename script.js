$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.button1').css({'transform': 'translate(' + (scroll/1) + 'px, '+ (scroll/4) +'px)'});
    $('.button2').css({'transform': 'translate(' + (-scroll/1) + 'px, '+ (-scroll/2) +'px)'});
    $('.button3').css({'transform': 'translate(' + (scroll/3) + 'px, '+ (scroll/6) +'px)'});
    $('.button4').css({'transform': 'translate(' + (scroll/1) + 'px, '+ (scroll/-2) +'px)'});
});

var secondGrid = document.querySelector('.second-grid');
var navbar = document.querySelector('nav');

window.addEventListener('scroll', function() {
    if (isScrolledIntoView(secondGrid)) {
        navbar.style.visibility = 'visible';
    } else {
        navbar.style.visibility = 'hidden';
    }
});

function isScrolledIntoView(el) {
    var rect = el.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    return (elemTop >= 0) && (elemBottom <= window.innerHeight);
}

window.addEventListener("scroll", function(){
    var secondGridPosition = secondGrid.getBoundingClientRect();
    var navbarPosition = navbar.getBoundingClientRect();
    if(secondGridPosition.top <= navbarPosition.height){
      navbar.style.visibility = 'visible';
    }else{
      navbar.style.visibility = 'hidden';
    }
  });
  