// ./hectordenize/js/components/_scrollspy.js
// SCROLL SPY COMPONENT

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

// function createObserver (element, threshold) {
//   const observer = new IntersectionObserver((items) => {
//       for (const item of items) {
//           if (item.isIntersecting) {
//               item.target.classList.add('is-visible');
//           }
//           else {
//             if (item.target.classList.contains('scroll-trigger-alternate')) {
//               item.target.classList.remove('is-visible');
//             }
//           }
//       }
//   }, {
//       threshold: threshold
//   });
//   observer.observe(element);
// }
  

// document.querySelectorAll('.scroll-trigger').forEach((trigger) => {
//   threshold = (typeof trigger.dataset.threshold != 'undefined')? trigger.dataset.threshold : 1;
//   createObserver(trigger, threshold);
// });