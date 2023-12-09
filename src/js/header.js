var menuIsOpen = false

function toggleMobileMenu() {
    if (!menuIsOpen) {
        $("#header-nav").fadeIn();
        menuIsOpen = true;
    } else if (menuIsOpen){
        $("#header-nav").fadeOut();
        menuIsOpen = false;
    }
    document.getElementById('header-nav').classList.toggle('active')
    document.getElementById('header__mobile-hamburger-button').classList.toggle('active')
}

