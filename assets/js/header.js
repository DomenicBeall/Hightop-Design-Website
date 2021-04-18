var lastScrollTop = 0;

document.addEventListener('scroll', function (event) {
    
    const header = document.getElementById("header");

    var st = window.pageYOffset || document.documentElement.scrollTop;

    var scrollDist = st - lastScrollTop;

    var newTop = header.getBoundingClientRect().top - scrollDist;

    header.style.top = clamp(newTop, -400, 0) + "px";

    lastScrollTop = st <= 0 ? 0 : st;

}, false);

function clamp(val, min, max) {
    if (val < min)
        return min;
    else if (val > max)
        return max;

    return val;
}