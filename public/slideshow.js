let slideIndex = 0;

function initializeSlider(slides) {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("displaySlide");
  }
}

function showSlide(index, slides) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(slides) {
  slideIndex--;
  showSlide(slideIndex, slides);
}

function nextSlide(slides) {
  slideIndex++;
  showSlide(slideIndex, slides);
}

export { nextSlide, prevSlide, showSlide, initializeSlider };
