function initMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

function initServiceSlider() {
  const slides = document.querySelectorAll(".service-slide");
  const prevBtn = document.getElementById("servicePrev");
  const nextBtn = document.getElementById("serviceNext");
  const progressBar = document.getElementById("progressBar");

  if (!slides.length || !prevBtn || !nextBtn || !progressBar) return;

  let currentSlide = 0;
  const intervalTime = 5000;
  let slideInterval;

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    resetProgress();
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function animateProgress() {
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";

    setTimeout(() => {
      progressBar.style.transition = `width ${intervalTime}ms linear`;
      progressBar.style.width = "100%";
    }, 50);
  }

  function resetProgress() {
    animateProgress();
  }

  function startSlider() {
    slideInterval = setInterval(nextSlide, intervalTime);
    animateProgress();
  }

  function resetSlider() {
    clearInterval(slideInterval);
    startSlider();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetSlider();
  });

  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    resetSlider();
  });

  startSlider();
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initServiceSlider();
});