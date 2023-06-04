
/*class Rotator {
    constructor(words) {
      this.words = words;
      this.current = 0;
      this.splitLetters = this.splitLetters.bind(this);
      this.animateIn = this.animateIn.bind(this);
      this.animateOut = this.animateOut.bind(this);
      this.onTransitionEnd = this.onTransitionEnd.bind(this);
      this.changeWord();
    }
    changeWord() {
      this.words.forEach((word, i) => {
        if (i > this.current) {
          word.style.transform = "translateY(18px)";
        }
      });
      setInterval(() => {
        this.current++;
        if (this.current >= this.words.length) {
          this.current = 0;
        }
        this.words.forEach((word, i) => {
          if (i == this.current) {
            this.animateIn(word);
          } else {
            this.animateOut(word);
          }
        });
      }, 2000);
    }
  
    onTransitionEnd(word) {
      word.classList.remove("animate");
      word.removeEventListener("transitionend", this.onTransitionEnd);
    }
  
    animateIn(word) {
      word.classList.add("animate", "show");
      word.style.transform = "translateY(0)";
      word.addEventListener("transitionend", () => this.onTransitionEnd(word));
    }
  
    animateOut(word) {
      word.classList.add("animate");
      word.classList.remove("show");
      word.style.transform = "translateY(18px)";
      word.addEventListener("transitionend", () => this.onTransitionEnd(word));
    }
  
    splitLetters(word) {
      const innerText = word.innerText;
      word.innerText = "";
      for (let i = 0; i < innerText.length; i++) {
        let letter = document.createElement("span");
        letter.className = "letter";
        letter.innerText = innerText.charAt(i);
        word.appendChild(letter);
      }
    }
    // end of class
  }
  const words = document.querySelectorAll(".ro__ro");
  new Rotator(words);
  
*/






  

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




/*tc*/ 

function myFunction() {
  var x = document.getElementById("myDIV"); 
  var z = document.getElementById("iqpp");
  if (x.style.display === "none") {
    z.style.transform = "rotate(45deg)";
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
   z.style.transform = "rotate(0deg)";
    
   
  }

  
}

function myFunction2() {
  var x = document.getElementById("myDIV2"); 
  var z = document.getElementById("iqpp2");
  if (x.style.display === "none") {
    z.style.transform = "rotate(45deg)";
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
   z.style.transform = "rotate(0deg)";
    
   
  }

  
}

function myFunction3() {
  var x = document.getElementById("myDIV3"); 
  var z = document.getElementById("iqpp3");
  if (x.style.display === "none") {
    z.style.transform = "rotate(45deg)";
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
   z.style.transform = "rotate(0deg)";
    
   
  }

  
}

function myFunction4() {
  var x = document.getElementById("myDIV4"); 
  var z = document.getElementById("iqpp4");
  if (x.style.display === "none") {
    z.style.transform = "rotate(45deg)";
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
   z.style.transform = "rotate(0deg)";
    
   
  }

  
}







//animation 

/*
const elements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
  elements.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add('active');
    }
  });
});
*/




//copyfoot

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}


