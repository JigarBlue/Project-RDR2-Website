"use strict";
(() => {
menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent === "X RED DEAD REDEMPTION 2" ? "≡ ROCKSTAR GAMES PRESENTS" : "X RED DEAD REDEMPTION 2";
});
})()
