
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


    $('#nav a').click(function(event) {
        event.preventDefault();
        let targetId = $(this).attr("href");

        let top;

        if (targetId.valueOf() === "#home") {

            top = 0;

        } else if (targetId.valueOf() === "#about") {

            top = $(targetId).offset().top - $(window).height() * .15;

        }else {

            top = $(targetId).offset().top - $(window).height() * .1;

        }

        $('html, body').stop().animate({scrollTop: top }, 700);
    });

