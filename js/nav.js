// Renders navbar
function renderNavbar() {
    const nav = document.getElementById('navbar');
    nav.innerHTML = `
        <div class="nav-container">

            <div class="nav-brand">
                <a href="#home" class="nav-brand-link">
                    <img src="${IMG.logo}"
                         alt="FLC Logo"
                         class="nav-logo"
                         width="64" height="64">
                    <span class="nav-brand-text">
                        <span class="nav-brand-name">FRAPG</span>
                        <span class="nav-brand-sub">Construction &amp; Supplies</span>
                    </span>
                </a>
            </div>

            <div class="nav-menu">
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
}