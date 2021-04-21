$(document).ready(function() {
    $(window).on('scroll', function() {

      var windowHeight = $(window).height(),
        gridTop = windowHeight * 0.2,
        gridBottom = windowHeight * 0.8;

      $('.service-item').each(function() {
        var thisTop = $(this).offset().top - $(window).scrollTop();

        if (thisTop > gridTop && (thisTop + $(this).height()) < gridBottom) {
            $(this).children(".service-item-content-hidden").css("opacity", "1");
            $(this).children(".service-item-content").css("opacity", "0");
        } else {
            $(this).children(".service-item-content-hidden").css("opacity", "0");
            $(this).children(".service-item-content").css("opacity", "1");
        }
      });
    });
    $(window).trigger('scroll');
});