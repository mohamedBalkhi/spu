const registerButton = document.querySelector('.register-button');

registerButton.addEventListener('click', () => {
  window.location.href = 'http://spu.edu.sy';
});
// get the elements
const carousel = document.querySelector('.advantages-carousel');
const carouselLeftArrow = document.querySelector('.advantages-carousel-arrow-left');
const carouselRightArrow = document.querySelector('.advantages-carousel-arrow-right');

// set the event listeners for the arrows
carouselLeftArrow.addEventListener('click', () => {
  carousel.scrollBy(-300, 0);
});

carouselRightArrow.addEventListener('click', () => {
  carousel.scrollBy(300, 0);
});

// set the event listener for the scroll event on the carousel container
carousel.addEventListener('scroll', () => {
  // check if the carousel is at the beginning or the end
  if (carousel.scrollLeft === 0) {
    carouselLeftArrow.classList.add('hidden');
  } else {
    carouselLeftArrow.classList.remove('hidden');
  }

  if (carousel.scrollLeft + carousel.clientWidth === carousel.scrollWidth) {
    carouselRightArrow.classList.add('hidden');
  } else {
    carouselRightArrow.classList.remove('hidden');
  }
});
