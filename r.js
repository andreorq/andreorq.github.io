class Rotator {
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
  

