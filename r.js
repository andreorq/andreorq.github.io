
  const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});



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




// Check if the cookie policy has been accepted
function isCookiePolicyAccepted() {
  return localStorage.getItem('cookieAccepted') === 'true';
}

// Set the cookie policy as accepted
function setCookiePolicyAccepted() {
  localStorage.setItem('cookieAccepted', 'true');
}

// Close the cookie policy message
function closeCookiePolicy(event) {
  event.preventDefault();
  var cookiePolicy = document.getElementById('cookie-policy');
  cookiePolicy.style.display = 'none';
  setCookiePolicyAccepted();
}

// Show the cookie policy message after a delay
function showCookiePolicyDelayed() {
  var cookiePolicy = document.getElementById('cookie-policy');
  setTimeout(function() {
    cookiePolicy.style.display = 'flex';
  }, 3000); // 5000 milliseconds = 5 seconds
}

// Handle the click event on the close link
document.getElementById('close-cookie').addEventListener('click', closeCookiePolicy);

// Show the cookie policy message only if it has not been accepted after a delay
document.addEventListener('DOMContentLoaded', function() {
  if (!isCookiePolicyAccepted()) {
    showCookiePolicyDelayed();
  }
});



function scrollToSection(event, sectionId) {
    event.stopPropagation();
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
