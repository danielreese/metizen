document.getElementById('dark-mode-toggle').addEventListener('change', function () {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.off-screen-menu').classList.toggle('dark-mode');
    document.querySelectorAll('.menu-links a').forEach(link => {
        link.classList.toggle('dark-mode');
    });
});
