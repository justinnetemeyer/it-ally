var nav = document.getElementById("leftsidenav");
var menu = document.getElementById("menu-btn");
var background = document.body;

if ($(window).width() < 620 || $(window).height() < 620) {
    function openNav() {
        nav.style.width = "100%";
        menu.style.visibility = "hidden";
    }

    function closeNav() {
        nav.style.width = "0%";
        menu.style.visibility = "visible";
    }
} else {
    function openNav() {
        nav.style.width = "250px";
        menu.style.visibility = "hidden";
        background.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
      
    function closeNav() {
        nav.style.width = "0";
        menu.style.visibility = "visible";
        background.style.backgroundColor = "var(--white)";
    }    
}

