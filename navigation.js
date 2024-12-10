export function initializeNavigation() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const closeMobileNavButton = document.getElementById('close-mobile-nav-button');

    if (mobileMenuToggle && navMenu && closeMobileNavButton) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });

        closeMobileNavButton.addEventListener('click', () => {
            navMenu.classList.add('hidden');
        });
    }
}