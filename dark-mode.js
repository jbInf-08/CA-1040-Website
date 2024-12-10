document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('toggle-switch');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');

    // Ensure both icons are properly initialized
    if (moonIcon && sunIcon) {
        const savedTheme = localStorage.getItem('theme');
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDarkMode)) {
            document.body.classList.add('dark-mode');
            themeToggle.checked = true;
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        } else {
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
            sunIcon.style.color = 'black'; // Ensure sun is visible in light mode
        }

        themeToggle.addEventListener('change', () => {
            const isDarkMode = themeToggle.checked;

            document.body.classList.toggle('dark-mode', isDarkMode);
            if (isDarkMode) {
                moonIcon.classList.remove('hidden');
                sunIcon.classList.add('hidden');
            } else {
                moonIcon.classList.add('hidden');
                sunIcon.classList.remove('hidden');
                sunIcon.style.color = 'black'; // Update color in light mode
            }

            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
        });
    }
});