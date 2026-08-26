// Theme toggle — remembers the visitor's choice, otherwise follows the OS.
(function () {
    var root = document.documentElement;
    var toggle = document.getElementById('theme-toggle');
    var system = window.matchMedia('(prefers-color-scheme: dark)');
    var current = null;

    try {
        current = localStorage.getItem('theme');
    } catch (e) { /* storage blocked */ }

    if (current === 'light' || current === 'dark') {
        root.setAttribute('data-theme', current);
    } else {
        current = null;
    }

    toggle.addEventListener('click', function () {
        var isDark = current ? current === 'dark' : system.matches;
        current = isDark ? 'light' : 'dark';

        root.setAttribute('data-theme', current);

        try {
            localStorage.setItem('theme', current);
        } catch (e) { /* storage blocked */ }
    });
})();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
