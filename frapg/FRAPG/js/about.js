// Renders About page
function renderAbout() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <!-- ================= HERO ================= -->
        <section class="hero page-hero" style="background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80');">
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <p class="hero-eyebrow">Home / About</p>
                <h1>About FRAPG</h1>
                <p class="hero-text">Our story. Our mission. Our commitment.</p>
            </div>
        </section>

        <!-- ================= WHO WE ARE ================= -->
        <section class="section">
            <div class="container">
                <div class="about-grid">
                    <div class="about-text">
                        <h2 class="section-title-left">Who We Are</h2>
                        <p>
                            FRAPG Company Limited is a Tanzanian company based in Mikumi, Morogoro, committed to 
                            providing quality construction materials, general supplies, and exceptional hospitality services.
                        </p>
                        <p>
                            We combine reliable professionalism and customer focus to serve individuals, businesses, 
                            and contractors across Tanzania. Our camp and lodge offer a unique blend of comfort, 
                            nature, and safari adventure near Mikumi National Park.
                        </p>
                    </div>
                    <div class="about-image">
                        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" alt="FRAPG Team" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= MISSION / VISION / VALUES ================= -->
        <section class="section bg-light-green">
            <div class="container">
                <div class="grid-3 mvv-grid">
                    <div class="mvv-card">
                        <div class="mvv-icon">🎯</div>
                        <h3>Our Mission</h3>
                        <p>To deliver quality products and services that create value for our customers and contribute to sustainable development in Tanzania.</p>
                    </div>

                    <div class="mvv-card">
                        <div class="mvv-icon">👁️</div>
                        <h3>Our Vision</h3>
                        <p>To be the leading company in construction, supply, and hospitality in Tanzania and beyond.</p>
                    </div>

                    <div class="mvv-card">
                        <div class="mvv-icon">💎</div>
                        <h3>Our Values</h3>
                        <p>Integrity, Quality, Customer Focus, Teamwork, and Innovation.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= BUSINESS DIVISIONS ================= -->
        <section class="section">
            <div class="container">
                <h2 class="text-center">Our Business Divisions</h2>
                <div class="grid-3" style="margin-top: 2.5rem;">

                    <div class="card service-card">
                        <div class="card-image">
                            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" alt="Construction & Supply" loading="lazy">
                        </div>
                        <div class="card-body">
                            <h3>Construction & Supply</h3>
                            <p>Building a stronger tomorrow with quality materials and reliable delivery.</p>
                        </div>
                    </div>

                    <div class="card service-card">
                        <div class="card-image">
                            <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80" alt="General Supplies" loading="lazy">
                        </div>
                        <div class="card-body">
                            <h3>General Supplies</h3>
                            <p>For your everyday business and office needs.</p>
                        </div>
                    </div>

                    <div class="card service-card">
                        <div class="card-image">
                            <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80" alt="Camp & Lodge" loading="lazy">
                        </div>
                        <div class="card-body">
                            <h3>FRAPG Camp & Lodge</h3>
                            <p>Relax. Explore. Enjoy. Luxury in nature near Mikumi National Park.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <!-- ================= CTA BANNER ================= -->
        <section class="section banner-cta" style="background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80');">
            <div class="banner-overlay"></div>
            <div class="container banner-content">
                <h2>Together we build, supply and create memorable experiences.</h2>
                <a href="#contact" class="btn btn-yellow" style="margin-top: 1.5rem;">Get In Touch</a>
            </div>
        </section>
    `;
}