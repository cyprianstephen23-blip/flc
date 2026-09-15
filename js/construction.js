// Renders Construction page
function renderConstruction() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <!-- ================= HERO ================= -->
        <section class="hero page-hero" style="background-image: url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80');">
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <p class="hero-eyebrow">Home / Construction</p>
                <h1>Construction & Supply</h1>
                <p class="hero-text">Quality materials. Reliable supply.</p>
            </div>
        </section>

        <!-- ================= BUILDING MATERIALS ================= -->
        <section class="section">
            <div class="container">
                <h2 class="section-title-left">Building Materials</h2>
                <p class="section-sub-left">
                    We supply high-quality construction materials for all types of projects, 
                    from residential to commercial and industrial.
                </p>

                <div class="grid-4 material-grid">
                    <div class="material-item">
                        <img src="https://titaniumbuildingsolutions.com/wp-content/uploads/2025/01/Dangote-Cement.jpg" alt="Cement" loading="lazy">
                        <p>Cement</p>
                    </div>
                    <div class="material-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Polwil1q9PGzjkWxxjLC9_jUbJMReDorpYGwmD1nBQ&s=10" alt="Bricks" loading="lazy">
                        <p>Bricks</p>
                    </div>
                    <div class="material-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTztWluHaOv_E45KI4kP3xHx9QyjdZRfcjvyqCyagLyg&s=10" alt="Glass" loading="lazy">
                        <p>Glass</p>
                    </div>
                    <div class="material-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIBL5dDUAm_g53wcDfy0o_5-5GNVhpxmBGhaJimum-KzUvutfEQzlTX9Q&s=10" alt="Wood" loading="lazy">
                        <p>Wood</p>
                    </div>
                    <div class="material-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKkqkUzA30PmXQmXRgKj6MzzIRTr81SZ6Sfdl4qk2BKg&s=10" alt="Sands" loading="lazy">
                        <p>Sands</p>
                    </div>
                    <div class="material-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-5m3O-j10s0Xb9RJ3YOLV7IsUrlO0vXWmHH9JBMWLg&s=10" alt="Tiles" loading="lazy">
                        <p>Tiles</p>
                    </div>
                    <div class="material-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDy2OwsBcm7cCNX71o1AGali1KC1-1rR6VV9UqrKJiOA&s=10" alt="Electrical Component" loading="lazy">
                        <p>Electrical Component</p>
                    </div>
                    <div class="material-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIWt2vy4B7n6y65Su46mUowmdw0LrYggZ9hq4tTtyHQ&s=10" loading="lazy">
                        <p>Plumbing Materials</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= WHY CHOOSE US ================= -->
        <section class="section bg-light-green">
            <div class="container">
                <div class="why-grid">
                    <div class="why-text">
                        <h2 class="section-title-left">Why Choose Us?</h2>
                        <ul class="why-list">
                            <li>✔ Quality products</li>
                            <li>✔ Competitive prices</li>
                            <li>✔ On-time delivery</li>
                            <li>✔ Experienced team</li>
                        </ul>
                    </div>
                    <div class="why-image">
                        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" alt="Delivery Truck" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= CTA ================= -->
        <section class="section banner-cta" style="background-image: url('../assets/images/construction/background.jpg');">
            <div class="banner-overlay"></div>
            <div class="container banner-content">
                <h2>Need materials for your next project?</h2>
                <a href="#contact" class="btn btn-yellow" style="margin-top: 1.5rem;">Request a Quote</a>
            </div>
        </section>
    `;
}