$(document).ready(function () {
    $(".apparition").addClass("invisible");
    function checkVisibility() {
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop();
        $(".apparition.invisible").each(function () {
            let elementTop = $(this).offset().top;
            let elementHeight = $(this).outerHeight();

            // Condition : si la moitié de l'élément est dans la zone visible
            if (scrollTop + windowHeight > elementTop + elementHeight / 2) {
                $(this).removeClass("invisible");
            }
        });
    }
    $(window).on("scroll", checkVisibility);
    checkVisibility();
});