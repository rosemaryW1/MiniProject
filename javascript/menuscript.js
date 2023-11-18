document.addEventListener('DOMContentLoaded', function () {
    // Get references to the button and the menu
    var toggleButton = document.getElementById('toggleMenu');
    var menu = document.getElementById('menu');

    // Add click event listener to the button
    toggleButton.addEventListener('click', function () {
        // Toggle the 'hidden' class on the menu
        menu.classList.toggle('hidden');
    });

    // Add keydown event listener to the document
    document.addEventListener('keydown', function (event) {
        // Check if the pressed key is 'm'
        if (event.key === 'm') {
            // Toggle the 'hidden' class on the menu
            menu.classList.toggle('hidden');
        }
    });
});
