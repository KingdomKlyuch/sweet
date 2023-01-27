

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    $('.button1').css({'transform': 'translate(' + (scroll/1) + 'px, '+ (scroll/4) +'px)'});
    $('.button2').css({'transform': 'translate(' + (-scroll/1) + 'px, '+ (-scroll/2) +'px)'});
    $('.button3').css({'transform': 'translate(' + (scroll/3) + 'px, '+ (scroll/6) +'px)'});
    $('.button4').css({'transform': 'translate(' + (scroll/1) + 'px, '+ (scroll/-2) +'px)'});
});

// Get the modals
var modal1 = document.getElementById("modal-1");
var modal2 = document.getElementById("modal-2");
var modal3 = document.getElementById("modal-3");

// When the user clicks the button, open the modal 
function openModal(modalNum) {
  if (modalNum == 1) {
    modal1.style.display = "block";
  } else if (modalNum == 2) {
    modal2.style.display = "block";
  } else {
    modal3.style.display = "block";
  }
}

// When the user clicks on <span> (x), close the modal
function closeModal(modalNum) {
  if (modalNum == 1) {
    modal1.style.display = "none";
  } else if (modalNum == 2) {
    modal2.style.display = "none";
  } else {
    modal3.style.display = "none";
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  } else if (event.target == modal2) {
    modal2.style.display = "none";
  } else if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
