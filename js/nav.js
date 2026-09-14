// Renders navbar
function renderNavbar() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
        <div class="nav-container">

            <!-- Left: logo + name -->
            <div class="nav-brand">
                <a href="#home" class="nav-brand-link">
                    <img src="assets/images/constants/flc_logo.png"
                         alt="FLC Logo"
                         class="nav-logo"
                         width="100" height="100">
                    <span class="nav-brand-text">
                        <span class="nav-brand-name">FRAPG</span>
                        <span class="nav-brand-sub">Construction &amp; Supplies</span>
                    </span>
                </a>
            </div>

            <!-- Right: nav links + toggle -->
            <div class="nav-menu">
                <button class="nav-toggle" id="navToggle" aria-label="Menu">☰</button>

                <ul class="nav-links" id="navLinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#construction">Construction</a></li>
                    <li><a href="#camp">Camp</a></li>
                    <li><a href="#supply">Supply</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>

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
