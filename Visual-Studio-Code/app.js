document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        body.classList.toggle('light-theme');
        updateThemeIcon();
    });

    function updateThemeIcon() {
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('light-theme')) {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            document.documentElement.style.setProperty('--background-color', '#ffffff');
            document.documentElement.style.setProperty('--text-color', '#444444');
            document.documentElement.style.setProperty('--card-background', '#f3f3f3');
            document.documentElement.style.setProperty('--hover-color', '#e0e0e0');
            document.documentElement.style.setProperty('--heading-color', '#444444');
        } else {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            document.documentElement.style.setProperty('--background-color', '#0D1117');
            document.documentElement.style.setProperty('--text-color', '#9ba3b4');
            document.documentElement.style.setProperty('--card-background', '#1f2428');
            document.documentElement.style.setProperty('--hover-color', '#30363d');
            document.documentElement.style.setProperty('--heading-color', '#ffffff');
        }
    }
});