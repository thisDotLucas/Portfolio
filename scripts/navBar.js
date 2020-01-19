
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


    window.addEventListener("hashchange", function () {
        window.scrollTo(window.scrollX, window.scrollY - $(window).height()*.1);
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