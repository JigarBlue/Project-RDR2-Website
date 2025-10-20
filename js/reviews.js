"use strict";
(() => {
menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent === "X RED DEAD REDEMPTION 2" ? "≡ ROCKSTAR GAMES PRESENTS" : "X RED DEAD REDEMPTION 2";
});

function addItem(text, text1) {
  const item = document.createElement('li');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  h2.textContent = text;
  p.textContent = text1;
  item.appendChild(h2);
  item.appendChild(p);
  rdr.insertBefore(item, rdr.firstChild);
}

function clearList() {
  while(rdr.firstChild) {
    rdr.removeChild(rdr.firstChild);
  }
}

add.addEventListener('click', ev => {
	if(!text.value || !text1.value) {
    alert("Empty!! Please fill in both fields to add your review");
  }
  else if(confirm(`Hello ${text.value}! Click OK to add your review OR Cancel to edit your review`)) {
    addItem(text.value, text1.value);
    text.value = null;
    text1.value = null;
    text.focus();  // give it the focus
    saveToStorage();
  }
  else {
    event.preventDefault();
  }
});

text.addEventListener('keydown', ev => {
  if(ev.key == "Enter") {
    add.click();
  }
});

text1.addEventListener('keydown', ev => {
  if(ev.key == "Enter") {
    add.click();
  }
});

function saveToStorage() {
const elements = Array.from(rdr.querySelectorAll('li'));
const data = elements.map(el => {
   return {
     text: el.querySelector('h2').textContent,
     text1: el.querySelector('p').textContent
   }
});
localStorage.setItem(rdr.id, JSON.stringify(data));
}


function loadFromStorage() {
	const data = JSON.parse(localStorage.getItem(rdr.id));
	if(data) {
		clearList();
		for (const item of data.reverse()) {
			addItem(item.text, item.text1);
		}
	}
}

loadFromStorage();
})()
