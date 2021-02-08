// Class style
class LightSlider {
  constructor(sliderClass) {
    this._sliderClass = String(sliderClass);
    this._sliderElement = document.querySelector(this._sliderClass);
    this._nextBtn = document.querySelector('.next');
    this._prevBtn = document.querySelector('.prev');
  
    this._clickHandler = this._clickHandler.bind(this);
    this._nextBtn.addEventListener('click', this._clickHandler);
    this._prevBtn.addEventListener('click', this._clickHandler);
  
  }

  _nextSlide() {
    this._sliderElement.appendChild(this._sliderElement.firstElementChild);
  }

  _prevSlide() {
    this._sliderElement.prepend(this._sliderElement.lastElementChild);
  }

  _clickHandler(e) {
    e.preventDefault();
    e.target.className === 'next' ? this._nextSlide() : this._prevSlide();
  }

}

const slider = new LightSlider('.slider');


// Functional style
// 'use strict';

// const showSlides = 3;
// const widthSlides = 150;
// const runSetInterval = true;
// const timeout = 3000;

// const slider = document.querySelector('.slider');
// const next = document.querySelector('.next');
// const prev = document.querySelector('.prev');

// document.querySelector('.wrapper').style.width = `${showSlides * widthSlides}px`;

// const handleClickNext = (e) => {
//   if(e) e.preventDefault();
//   slider.appendChild(slider.firstElementChild);
// }

// const handleClickPrev = (e) => {
//   if(e) e.preventDefault();
//   slider.prepend(slider.lastElementChild);
// }

// if(runSetInterval) setInterval(handleClickNext, timeout);

// next.addEventListener('click', handleClickNext);
// prev.addEventListener('click', handleClickPrev);