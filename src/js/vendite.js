document.addEventListener("DOMContentLoaded", () => {
  const pdfLinks = document.querySelectorAll(".pdf-list a");

  pdfLinks.forEach((link) => {
    link.addEventListener("click", () => {
      link.classList.add("opened");
    });
  });
});