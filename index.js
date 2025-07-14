let lastScrollY = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    nav.style.top = "-80px";
  } else {
    nav.style.top = 0;
  }

  lastScrollY = window.scrollY;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("scroll_show");
    } else {
      entry.target.classList.remove(
        "scroll_show"
      ); /* Remet l'animation si le visiteur revient en haut puis en bas */
    }
  });
});

const hiddenElements = document.querySelectorAll(".scroll_hidden");
hiddenElements.forEach((el) => observer.observe(el));
