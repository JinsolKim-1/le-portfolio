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

function sendMail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent(`Message from ${name}`);
  const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

  window.location.href = `mailto:jinsolkimain@gmail.com?subject=${subject}&body=${body}`;
}

