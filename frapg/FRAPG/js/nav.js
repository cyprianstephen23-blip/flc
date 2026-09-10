// Renders navbar
function renderNavbar() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
        <div class="container nav-container">
            <a href="#home" class="nav-logo">FRAPG</a>

            <button class="nav-toggle" id="navToggle" aria-label="Menu">☰</button>

            <ul class="nav-links" id="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#construction">Construction</a></li>
                <li><a href="#camp">Camp</a></li>
                <li><a href="#supply">Supply</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <a href="#contact" class="btn btn-yellow nav-cta">Get In Touch</a>
        </div>
    `;

    // Mobile menu toggle
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    toggle.addEventListener('click', () => {
        links.classList.toggle('open');
    });

    // Close menu when a link is clicked
    links.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            links.classList.remove('open');
        });
    });
}