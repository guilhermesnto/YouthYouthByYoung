// animação dos botões da navbar
window.onscroll = function() {
    var nav = document.getElementById("navbar");
    var navLink = document.getElementsByClassName("nav-link");
    var logo = document.getElementById("logo");

    if(window.scrollY != 0) {
        nav.classList.add("navbar-ativo");
        for (var i = 0; i< navLink.length; i++) {
            navLink[i].classList.remove("link-animation")
            navLink[i].classList.add("nav-link-ativo");
            navLink[i].classList.add("link-animation-ativo");
        };
        logo.classList.add("logo-ativo");
    } else {
        nav.classList.remove("navbar-ativo");
        for (var i = 0; i < navLink.length; i++) {
            navLink[i].classList.remove("nav-link-ativo")
            navLink[i].classList.remove("link-animation-ativo");
            navLink[i].classList.add("link-animation");
        };
        logo.classList.remove("logo-ativo");
    }
}
