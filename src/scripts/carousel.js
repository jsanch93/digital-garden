document.addEventListener('DOMContentLoaded', () => {
  // CAROUSEL
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.toggle('active', i === index);
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
  }

  document.querySelector('.carousel-control-next').addEventListener('click', nextSlide);
  document.querySelector('.carousel-control-prev').addEventListener('click', prevSlide);

  showSlide(currentSlide);
});