
    $(document).ready(function () {

        calculateWhiteSpace($(window).height())

        $(window).resize(function () {

            calculateWhiteSpace($(window).height())

        });
    });


    function calculateWhiteSpace(windowHeight) {
        $(".white-space").css("margin-top", windowHeight * 0.6 + "px");
        document.getElementById("before-hero").style.marginTop = windowHeight * 0.22 + "px";
        document.getElementById("before-footer").style.marginTop = windowHeight * 0.27 + "px";
    }