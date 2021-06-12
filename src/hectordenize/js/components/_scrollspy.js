// ./hectordenize/js/components/_scrollspy.js
// SCROLL SPY COMPONENT

"use strict";

export function navScrollSpy() {
  
  const menuBtn = document.querySelector('.menuBtn');
  const main = document.querySelector('main');

  window.addEventListener('scroll', (e) => {
      if ((main.offsetTop - menuBtn.offsetHeight) < window.scrollY) {
        menuBtn.classList.add('navScrollSpyTarget');
      }
      else {
        menuBtn.classList.remove('navScrollSpyTarget');
      }
  });
}



export function headerScrollSpy() {
  
  const appHeader = document.getElementById('appHeader');
  const appLogo = document.getElementById('appLogo');

  window.addEventListener('scroll', (e) => {
      if ((appLogo.offsetTop - appHeader.offsetTop) < window.scrollY) {
        appHeader.classList.remove('isVisible');
        appLogo.classList.add('isVisible');
      }
      else {
        appHeader.classList.add('isVisible');
        appLogo.classList.remove('isVisible');
      }
  });
}
