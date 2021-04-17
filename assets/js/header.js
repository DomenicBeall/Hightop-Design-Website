var lastScrollTop = 0;

document.addEventListener('scroll', function (event) {
    
    const header = document.getElementById("header");

    var st = window.pageYOffset || document.documentElement.scrollTop;

    var scrollDist = st - lastScrollTop;

    console.log("Scroll Distance: " + scrollDist);

    var newTop = header.getBoundingClientRect().top - scrollDist;

    console.log("New Top: " + newTop);

    header.style.top = clamp(newTop, -200, 0) + "px";

    lastScrollTop = st <= 0 ? 0 : st;

}, false);

function clamp(val, min, max) {
    if (val < min)
        return min;
    else if (val > max)
        return max;

    return val;
}