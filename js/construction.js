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
                        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80" alt="Cement" loading="lazy">
                        <p>Cement</p>
                    </div>
                    <div class="material-item">
                        <img src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=400&q=80" alt="Bricks" loading="lazy">
                        <p>Bricks</p>
                    </div>
                    <div class="material-item">
                        <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=400&q=80" alt="Glass" loading="lazy">
                        <p>Glass</p>
                    </div>
                    <div class="material-item">
                        <img src="https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=400&q=80" alt="Wood" loading="lazy">
                        <p>Wood</p>
                    </div>
                    <div class="material-item">
                        <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=400&q=80" alt="Sands" loading="lazy">
                        <p>Sands</p>
                    </div>
                    <div class="material-item">
                        <img src="https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=400&q=80" alt="Tiles" loading="lazy">
                        <p>Tiles</p>
                    </div>
                    <div class="material-item">
                        <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=400&q=80" alt="Electrical Component" loading="lazy">
                        <p>Electrical Component</p>
                    </div>
                    <div class="material-item">
                        <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=400&q=80" alt="Plumbing Materials" loading="lazy">
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
        <section class="section banner-cta" style="background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80');">
            <div class="banner-overlay"></div>
            <div class="container banner-content">
                <h2>Need materials for your next project?</h2>
                <a href="#contact" class="btn btn-yellow" style="margin-top: 1.5rem;">Request a Quote</a>
            </div>
        </section>
    `;
}