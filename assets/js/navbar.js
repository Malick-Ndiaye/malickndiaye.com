function toggleMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
}
