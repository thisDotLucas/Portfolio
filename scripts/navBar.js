
    let menu = document.getElementById("menu");
    let nav = document.getElementById("nav");
    let exit = document.getElementById("exit");

    menu.addEventListener("click", function (event) {
       nav.classList.toggle("hide-mobile");
       menu.style.display = "none";
       event.preventDefault();
    });


    exit.addEventListener("click", function (event) {
        nav.classList.add("hide-mobile");
        menu.style.display = "unset";
        event.preventDefault();
    });

    $('#nav a').click(function( e ) {
        e.preventDefault();
        let targetId = $(this).attr("href");

        let top;

        if (targetId.valueOf() === "#home") {

            top = 0;

        } else {

            top = $(targetId).offset().top - $(window).height() * .1;

        }

        $('html, body').stop().animate({scrollTop: top }, 700);
    });









   /* function toggleHamburger(x) {

        let a = $(".header-link");

        if(x){
           nav.css("position", "fixed");
           nav.css("width", "45%");
           nav.css("top", "0");
           nav.css("right", "0");
           nav.css("text-align", "left");
           nav.css("background", "#F7F7F7");
           nav.css("height", "100%");
           nav.css("z-index", "8");
           nav.css("padding-top", "3em");
        }


    }*/