console.log('Site JS loaded');

// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ScrollReveal Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const elementTop = reveals[i].getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      reveals[i].classList.add("visible");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Article Search
const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll(".article-card");

    articles.forEach((card) => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      const body = card.querySelector("p").innerText.toLowerCase();
      const match = title.includes(filter) || body.includes(filter;
      card.style.display = match ? "block" : "none";
    });
  });
}