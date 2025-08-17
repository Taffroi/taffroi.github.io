let lastScrollY = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    nav.style.top = "-80px";
  } else {
    nav.style.top = 0;
  }
  if (window.scrollY == 0) {
    nav.classList.add("top");
  } else {
    nav.classList.remove("top");
  }

  lastScrollY = window.scrollY;
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll_show");
      } else {
        //   entry.target.classList.remove(
        //     "scroll_show"
        //   ); /* Remet l'animation si le visiteur revient en haut puis en bas */
      }
    });
  },
  {
    threshold: 0.25,
  }
);

let hiddenElements = document.querySelectorAll(".scroll_hidden"),
  animateTextElements = document.querySelectorAll(".text_fill");

hiddenElements.forEach((el) => observer.observe(el));
animateTextElements.forEach((el) => observer.observe(el));

// Code pour que l'étoile des boutons suive le curseur

// let followCursorElement = document.getElementById("caca");

// //Détecte si c'est une tablette/mobile
// function isTouchDevice() {
//   try {
//     document.createEvent("TouchEvent");
//     return true;
//   } catch (e) {
//     return false;
//   }
// }

// const move = (e) => {
//   try {
//     // PageX et PageY retournent la position du curseur
//     var x = !isTouchDevice() ? e.pageX : e.touches[0].pageX;
//     var y = !isTouchDevice() ? e.pageY : e.touches[0].pageY;
//   } catch (e) {}
//   followCursorElement.style.left = x + "px";
//   followCursorElement.style.top = y + "px";
// };

// // Pour la souris
// document.addEventListener("mousemove", (e) => {
//   move(e);
// });
