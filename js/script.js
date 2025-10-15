const hamburgerButton = document.getElementById('hamburger-button');
const navbarMenu = document.getElementById('navbar-menu');
const body = document.body;
const menuLinks = document.querySelectorAll('#navbar-menu a'); 

function closeMenu() {
    body.classList.remove('menu-open'); 
    navbarMenu.classList.remove('active'); 

    const icon = hamburgerButton.querySelector('i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
}

function openMenu() {
   
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);

    body.classList.add('menu-open');
    navbarMenu.classList.add('active');

   
    const icon = hamburgerButton.querySelector('i');
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
}


hamburgerButton.addEventListener('click', () => {
    if (navbarMenu.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarMenu.classList.contains('active')) {
            closeMenu();
        }
    });
});