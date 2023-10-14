


  window.addEventListener("scroll", function() {
        var nav = document.querySelector("nav2");
        nav.classList.toggle("sticky", window.scrollY > 4350);
    })

    window.addEventListener("scroll", function() {
        var nav = document.querySelector("nav2");
        nav.classList.toggle("sticky2", window.scrollY > 680);
    })


var mybutton = document.getElementById("scrollBtn");

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

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click", topFunction);





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
  var moveAmount = scrollPosition / 7; 

  header.style.backgroundPositionY = moveAmount + 'px';
});




function isCookiePolicyAccepted() {
  return localStorage.getItem('cookieAccepted') === 'true';
}

function setCookiePolicyAccepted() {
  localStorage.setItem('cookieAccepted', 'true');
}

function closeCookiePolicy(event) {
  event.preventDefault();
  var cookiePolicy = document.getElementById('cookie-policy');
  cookiePolicy.style.display = 'none';
  setCookiePolicyAccepted();
}

function showCookiePolicyDelayed() {
  var cookiePolicy = document.getElementById('cookie-policy');
  setTimeout(function() {
    cookiePolicy.style.display = 'flex';
  }, 3000); // 5000 milliseconds = 5 seconds
}

document.getElementById('close-cookie').addEventListener('click', closeCookiePolicy);

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






/*document.addEventListener("DOMContentLoaded", function() {
  const popupLinks = document.querySelectorAll(".popup-link");
  popupLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const popupId = this.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      popup.style.display = "flex";
    });
  });

  const closeButtons = document.querySelectorAll(".popup-close");
  closeButtons.forEach(button => {
    button.addEventListener("click", function() {
      const popup = this.closest(".popup");
      popup.style.display = "none";
    });
  });
});*/


document.addEventListener("DOMContentLoaded", function() {
  const popupLinks = document.querySelectorAll(".popup-link");
  popupLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const popupId = this.getAttribute("data-popup");
      const popup = document.getElementById(popupId);
      popup.style.display = "flex";
    });
  });

  const closeButtons = document.querySelectorAll(".popup-close");
  closeButtons.forEach(button => {
    button.addEventListener("click", function() {
      const popup = this.closest(".popup");
      popup.style.display = "none";
    });
  });

  // Add a click event listener to the document to close the popup when clicking outside of it.
  document.addEventListener("click", function(e) {
    const popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
      if (e.target !== popup && !popup.contains(e.target)) {
        popup.style.display = "none";
      }
    });
  });
});


