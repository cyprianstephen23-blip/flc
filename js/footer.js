// Renders footer
function renderFooter() {
    const footer = document.getElementById('footer');
    if (!footer) return;

    footer.className = 'site-footer';
    footer.innerHTML = `
        <div class="container">
            <div class="footer-grid">

                <!-- Brand / About -->
                <div class="footer-col">
                    <h4>FRAPG</h4>
                    <p>
                        FRAPG Company Limited — quality construction materials,
                        general supplies, and exceptional hospitality in Mikumi,
                        Morogoro, Tanzania.
                    </p>
                </div>

                <!-- Quick Links -->
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#construction">Construction</a></li>
                        <li><a href="#camp">Camp &amp; Lodge</a></li>
                        <li><a href="#supply">General Supplies</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                <!-- Services -->
                <div class="footer-col">
                    <h4>Our Services</h4>
                    <ul>
                        <li>Building Materials</li>
                        <li>General Supplies</li>
                        <li>Camp &amp; Lodge Booking</li>
                        <li>Safari &amp; Activities</li>
                    </ul>
                </div>

                <!-- Contact -->
                <div class="footer-col">
                    <h4>Get In Touch</h4>
                    <ul>
                        <li>📍 Mikumi, Morogoro, Tanzania</li>
                        <li>📞 +255 754 456 789</li>
                        <li>✉️ info@frapg.co.tz</li>
                    </ul>
                </div>

            </div>

            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} FRAPG Company Limited. All rights reserved.</p>
            </div>
        </div>
    `;
}