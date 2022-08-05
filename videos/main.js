/*const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open' );
       
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');

        menuOpen = false;
    }
});*/

window.onload = function () {
const menu_btn = document.querySelector ('.menu-btn');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('open');
    mobile_menu.classList.toggle('open');
  
} )
    

}


