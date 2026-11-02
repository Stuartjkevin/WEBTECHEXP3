// Experiment 3 | Responsive Webpage Design Using HTML5 & CSS3
// Name: Stuart J | Reg No: URK24CS1020

// Get the mobile menu button and navigation links.
var toggle = document.getElementById('navToggle');
var links = document.getElementById('navLinks');

// Open or close the navigation menu when the button is clicked.
toggle.addEventListener('click', function () {
    var isOpen = links.classList.toggle('is-open');

    // Animate the three-line menu icon.
    toggle.classList.toggle('is-open', isOpen);

    // Update accessibility information.
    toggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu after selecting a navigation link.
links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});
