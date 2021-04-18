var lastScrollT = 0;

document.addEventListener('scroll', function (event) {
    
    const parallax = document.getElementById("parallax");

    var st = window.pageYOffset || document.documentElement.scrollTop;

    var scrollDist = st - lastScrollT;

    var newTop = parallax.getBoundingClientRect().top - Math.round(scrollDist / 5);

    parallax.style.top = newTop + "px";

    lastScrollT = st <= 0 ? 0 : st;

}, false);