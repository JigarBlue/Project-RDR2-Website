"use strict";
(() => {
// Nav menu toggler
menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent === "X RED DEAD REDEMPTION 2" ? "≡ ROCKSTAR GAMES PRESENTS" : "X RED DEAD REDEMPTION 2";
});

//Image Slideshow
let currentSlide = 0;
slides();

function slides() {
  let slideshow;
  const img = document.querySelectorAll(".slides");
  for (slideshow = 0; slideshow < img.length; slideshow++) {
    img[slideshow].style.display = "none";
  }
  currentSlide++;
  if (currentSlide > img.length) {currentSlide = 1}
  img[currentSlide-1].style.display = "block";
   setTimeout(slides, 3000);
}

// Post Reviews
function addItem(text2, text3) {
  const item = document.createElement('li');
  const h4 = document.createElement('h4');
  const p = document.createElement('p');
  h4.textContent = text2;
  p.textContent = text3;
  item.appendChild(h4);
  item.appendChild(p);
  rdr2.insertBefore(item, rdr2.firstChild);
}

function clearList() {
  while(rdr2.firstChild) {
    rdr2.removeChild(rdr2.firstChild);
  }
}

add.addEventListener('click', ev => {
	if(!text2.value || !text3.value) {
    alert("Empty!! Please fill in both fields to add your review");
  }
  else if(confirm(`Hello ${text2.value}! Click OK to add your review OR Cancel to edit your review`)) {
    addItem(text2.value, text3.value);
    text2.value = null;
    text3.value = null;
    text2.focus();  // give it the focus
    saveToStorage();
  }
  else {
    event.preventDefault();
  }
});

text2.addEventListener('keydown', ev => {
  if(ev.key == "Enter") {
    add.click();
  }
});

text3.addEventListener('keydown', ev => {
  if(ev.key == "Enter") {
    add.click();
  }
});

function saveToStorage() {
const elements = Array.from(rdr2.querySelectorAll('li'));
const data = elements.map(el => {
   return {
     text2: el.querySelector('h4').textContent,
     text3: el.querySelector('p').textContent
   }
});
localStorage.setItem(rdr2.id, JSON.stringify(data));
}

function loadFromStorage() {
	const data = JSON.parse(localStorage.getItem(rdr2.id));
	if(data) {
		clearList();
		for (const item of data.reverse()) {
			addItem(item.text2, item.text3);
		}
	}
}
loadFromStorage();
})()
