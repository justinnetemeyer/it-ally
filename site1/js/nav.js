var nav = document.getElementById("leftsidenav");
var menu = document.getElementById("menu-btn");
var burger = document.getElementById("burger");

if ($(window).width() < 620 || $(window).height() < 620) {
    function openNav() {
        nav.style.width = "100%";
        burger.style.visibility = "hidden";
    }

    function closeNav() {
        nav.style.width = "0%";
        burger.style.visibility = "visible";
    }
} else {
    function openNav() {
        nav.style.width = "250px";
        menu.style.visibility = "hidden";
    }
      
    function closeNav() {
        nav.style.width = "0";
        menu.style.visibility = "visible";
    }    
}

