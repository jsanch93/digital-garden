let currentIndex = 0;
  const items = document.querySelectorAll('.carousel-item');
  const track = document.querySelector('.carousel-track');

  function updateCarousel() {
    const viewportWidth = document.querySelector('.carousel-viewport').offsetWidth;
    const itemWidth = items[0].offsetWidth + 16; // 16 = assumed gap
    const offset = itemWidth * currentIndex;
    const centerOffset = (viewportWidth / 2) - (itemWidth / 2);

    track.style.transform = `translateX(${-offset + centerOffset}px)`;

    items.forEach((item, index) => {
      item.classList.toggle('active', index === currentIndex);
    });
  }

  document.querySelector('.carousel-control.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  window.addEventListener('load', updateCarousel);
  window.addEventListener('resize', updateCarousel);