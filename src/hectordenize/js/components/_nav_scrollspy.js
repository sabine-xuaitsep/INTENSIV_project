// ./hectordenize/js/components/_nav_scrollspy.js
// NAV SCROLL SPY COMPONENT

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

