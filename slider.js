'use strict';

const showSlides = 3;
const widthSlides = 150;
const runSetInterval = true;
const timeout = 3000;

const slider = document.querySelector('.slider');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

let currentSlide = 0;

document.querySelector('.wrapper').style.width = `${showSlides * widthSlides}px`;

const handleClickNext = (e) => {
  if(e) e.preventDefault();
  slider.appendChild(slider.firstElementChild);
}

const handleClickPrev = (e) => {
  if(e) e.preventDefault();
  slider.prepend(slider.lastElementChild);
}

if(runSetInterval) setInterval(handleClickNext, timeout);

next.addEventListener('click', handleClickNext);
prev.addEventListener('click', handleClickPrev);