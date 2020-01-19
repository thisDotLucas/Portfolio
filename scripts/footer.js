

    $(document).ready(function () {

        sizeTriangle($(window).width(), $(window).height());

        $(window).resize(function () {

            sizeTriangle($(window).width(), $(window).height())

        });
    });


    function sizeTriangle(windowWidth, windowHeight){

        let triangle = document.getElementById("orange-triangle-right");

        triangle.style.borderTop = windowHeight * 0.22 + "px solid transparent";
        triangle.style.borderLeft = windowWidth * 0.9 + "px solid #EF9A1A";

    }
    
    


