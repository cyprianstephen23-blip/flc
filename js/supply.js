// Renders Supply page
function renderSupply() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <!-- ================= HERO ================= -->
        <section class="hero page-hero" style="background-image: url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80');">
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <p class="hero-eyebrow">Home / Supply</p>
                <h1>General Supplies</h1>
                <p class="hero-text">Everything you need, in one place.</p>
            </div>
        </section>

        <!-- ================= OFFICE & STATIONERY ================= -->
        <section class="section">
            <div class="container">
                <div class="about-grid">
                    <div class="about-text">
                        <h2 class="section-title-left">Office & Stationery</h2>
                        <p>
                            We provide a wide range of office equipment, stationery, 
                            and printing services for businesses, schools, and institutions.
                        </p>

                        <ul class="supply-list">
                            <li>General stationery material supply</li>
                            <li>Printers, lamination, photocopy machines, etc.</li>
                            <li>Stationery and books supplies</li>
                            <li>Design and printing of office papers</li>
                            <li>Binding of all loose papers (payment papers, correspondence letters, etc.)</li>
                        </ul>
                    </div>
                    <div class="about-image">
                        <img src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=800&q=80" alt="Office & Stationery" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= OUR PRODUCTS INCLUDE ================= -->
        <section class="section bg-light-green">
            <div class="container">
                <h2 class="text-center">Our Products Include</h2>
                <div class="grid-3" style="margin-top: 2.5rem;">
                    <div class="feature-item">✅ Notebooks & Paper</div>
                    <div class="feature-item">✅ Printers & Toner</div>
                    <div class="feature-item">✅ Office Furniture</div>
                    <div class="feature-item">✅ Filing & Storage</div>
                    <div class="feature-item">✅ Pens & Markers</div>
                    <div class="feature-item">✅ Art & Craft Supplies</div>
                </div>
            </div>
        </section>

        <!-- ================= CTA ================= -->
        <section class="section banner-cta" style="background-image: url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1600&q=80');">
            <div class="banner-overlay"></div>
            <div class="container banner-content">
                <h2>Need a bulk order?</h2>
                <p class="banner-sub">We supply offices, schools, and institutions with quality products and fast delivery.</p>
                <a href="#contact" class="btn btn-yellow" style="margin-top: 1rem;">Contact Us</a>
            </div>
        </section>
    `;
}