document.addEventListener("DOMContentLoaded", function() {
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  scrollLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});

window.addEventListener("load", () => {
  const fills = document.querySelectorAll(".fill");
  fills.forEach(fill => {
    const width = fill.getAttribute("data-width");
    fill.style.width = width;
  });
});


