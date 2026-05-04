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

  function animateProgress() {
    progressBar.style.transition = "none";
    progressBar.style.width = "0%";

    setTimeout(() => {
      progressBar.style.transition = `width ${intervalTime}ms linear`;
      progressBar.style.width = "100%";
    }, 50);
  }

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    animateProgress();
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  function startSlider() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
    animateProgress();
  }

  nextBtn.addEventListener("click", () => {
    nextSlide();
    startSlider();
  });

  prevBtn.addEventListener("click", () => {
    showSlide(currentSlide - 1);
    startSlider();
  });

  startSlider();
}

function initFileUpload() {
  const input = document.querySelector('input[type="file"][name="allegato"]');

  if (!input) return;

  input.addEventListener("change", () => {
    const file = input.files[0];
    const box = input.closest(".file-upload");

    if (!file || !box) return;

    box.classList.add("active");

    box.querySelector(".file-icon").textContent = "✓";
    box.querySelector(".file-title").textContent = "File allegato";
    box.querySelector(".file-name").textContent = file.name;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initServiceSlider();
  initFileUpload();
});

document.addEventListener("change", function (event) {
  const input = event.target;

  if (!input.matches('input[type="file"][name="allegato"]')) return;

  const box = input.closest(".file-upload");
  const file = input.files[0];

  if (!box || !file) return;

  const icon = box.querySelector(".file-icon");
  const title = box.querySelector(".file-title");
  const fileName = box.querySelector(".file-name");

  box.classList.add("active");

  if (icon) icon.textContent = "✓";
  if (title) title.textContent = "File allegato";
  if (fileName) fileName.textContent = file.name;
});