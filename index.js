let lastScrollY = 0;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        nav.style.top = "-80px";
    } else {
        nav.style.top = 0;
    }

    lastScrollY = window.scrollY;
})