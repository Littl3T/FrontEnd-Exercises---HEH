$(document).ready(function () {
    const parallaxConst = 100;
    function CheckScroll() {
        let windowTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        $('.MyFirstParallaxe').each(function () {
            let elementTop = $(this).offset().top;
            let elementHeight = $(this).outerHeight();
            let elementBottom = elementTop + elementHeight;
            if (elementBottom > windowTop && elementTop < windowTop + windowHeight) {
                let progress = (windowTop + windowHeight - elementTop) / (windowHeight + elementHeight);
                let parallaxOffset = 30 + (progress * parallaxConst);
                $(this).css('background-position', `center ${parallaxOffset}%`);
            }
        });
    }
    $(window).on("scroll", CheckScroll);
    CheckScroll();
});
