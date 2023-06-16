
  

  // Get the button:
var mybutton = document.getElementById("scrollBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click", topFunction);




//copyfoot

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}




/*window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.pageYOffset;

  header.style.backgroundPositionY = -scrollPosition / 8 + 'px';


});*/



window.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrollPosition = window.pageYOffset;
  var moveAmount = scrollPosition / 7; // Adjust the value to control the speed of movement

  header.style.backgroundPositionY = moveAmount + 'px';
});

