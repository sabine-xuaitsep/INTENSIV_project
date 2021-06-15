// ./hectordenize/js/components/_nav_trigger.js
// NAV TRIGGER COMPONENT

export function navTrigger() {

  const menuBtn = document.getElementById('navTrigger');

  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById(this.dataset.target).classList.toggle('navMobileOn');
    if (this.classList.contains('closeMenu')) {
      menuBtn.classList.remove('closeMenu');
    }
    else {
      setTimeout(function(){ menuBtn.classList.add('closeMenu'); }, 700);
    }
  });

  menuBtn.addEventListener('blur', function (e) {
    e.preventDefault();
    document.getElementById(this.dataset.target).classList.remove('navMobileOn');
    this.classList.remove('closeMenu');
  });
}