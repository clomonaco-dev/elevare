document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".works-3d-carousel");

  carousels.forEach((carousel) => {
    const cards = carousel.querySelectorAll(".carousel-card");
    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");

    let current = 0;
    let startX = 0;

    function updateCarousel() {
      cards.forEach((card, index) => {
        card.classList.remove("active", "prev", "next");

        if (index === current) {
          card.classList.add("active");
        } else if (index === (current + 1) % cards.length) {
          card.classList.add("next");
        } else if (index === (current - 1 + cards.length) % cards.length) {
          card.classList.add("prev");
        }
      });
    }

    function goNext() {
      current = (current + 1) % cards.length;
      updateCarousel();
    }

    function goPrev() {
      current = (current - 1 + cards.length) % cards.length;
      updateCarousel();
    }

    nextBtn.addEventListener("click", goNext);
    prevBtn.addEventListener("click", goPrev);

    cards.forEach((card, index) => {
      card.addEventListener("click", () => {
        current = index;
        updateCarousel();
      });
    });

    setInterval(goNext, 4000);

    carousel.addEventListener("pointerdown", (e) => {
      startX = e.clientX;
    });

    carousel.addEventListener("pointerup", (e) => {
      const diff = e.clientX - startX;

      if (diff > 60) goPrev();
      if (diff < -60) goNext();
    });

    updateCarousel();
  });
});