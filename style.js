document.addEventListener('DOMContentLoaded', function () {
    const projectLinks = document.querySelectorAll('#projects a');

    projectLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            alert('Project link clicked!');
        });
    });
});
