// Renders homepage
function renderHome() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <!-- ================= HERO ================= -->
        <section class="hero" style="background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80');">
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <p class="hero-eyebrow">FRAPG COMPANY LIMITED</p>
                <h1>Building. Supplying. Hospitality.</h1>
                <p class="hero-text">Reliable construction materials, general supplies and a unique camp experience in Mikumi, Tanzania.</p>
                <div class="hero-buttons">
                    <a href="#construction" class="btn btn-yellow">Our Services</a>
                    <a href="#camp" class="btn btn-outline">Discover FRAPG Camp</a>
                </div>
            </div>
        </section>

        <!-- ================= WHAT WE DO ================= -->
        <section class="section">
            <div class="container">
                <h2 class="section-title-left">What We Do</h2>
                <p class="section-sub-left">Three main areas. One trusted company.</p>

                <div class="grid-3">
                    <div class="card service-card">
                        <div class="card-image">
                            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" alt="Construction & Supply" loading="lazy">
                        </div>
                        <div class="card-body">
                            <span class="card-tag">01</span>
                            <h3>CONSTRUCTION & SUPPLY</h3>
                            <p>Quality construction materials and building solutions for residential and commercial projects across Tanzania.</p>
                            <a href="#construction" class="card-link">Explore →</a>
                        </div>
                    </div>

                    <div class="card service-card">
                        <div class="card-image">
                            <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=800&q=80" alt="General Supplies" loading="lazy">
                        </div>
                        <div class="card-body">
                            <span class="card-tag">02</span>
                            <h3>GENERAL SUPPLIES</h3>
                            <p>Stationery, printing, photography, branding and office supplies for businesses and institutions.</p>
                            <a href="#supply" class="card-link">View Services →</a>
                        </div>
                    </div>

                    <div class="card service-card">
                        <div class="card-image">
                            <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80" alt="Camp & Lodge" loading="lazy">
                        </div>
                        <div class="card-body">
                            <span class="card-tag">03</span>
                            <h3>CAMP & LODGE</h3>
                            <p>Luxury accommodation, camping and safari experiences in the heart of Mikumi National Park.</p>
                            <a href="#camp" class="card-link">Discover FRAPG Camp →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= CAMP & LODGE BANNER ================= -->
        <section class="section banner-camp" style="background-image: url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80');">
            <div class="banner-overlay"></div>
            <div class="container banner-content">
                <p class="banner-eyebrow">Experience Nature</p>
                <h2>FRAPG CAMP & LODGE</h2>
                <p class="banner-sub">Luxury in Nature — Relax. Explore. Enjoy.</p>
                <a href="#camp" class="btn btn-yellow">Learn More</a>
            </div>
        </section>

        <!-- ================= PRODUCTS & SERVICES ================= -->
        <section class="section">
            <div class="container">
                <h2 class="section-title-left">Our Products & Services</h2>
                <div class="grid-5 product-grid">
                    <div class="product-item">
                        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=400&q=80" alt="Cement & Bricks" loading="lazy">
                        <p>Cement & Bricks</p>
                    </div>
                    <div class="product-item">
                        <img src="https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=400&q=80" alt="Tiles & Flooring" loading="lazy">
                        <p>Tiles & Flooring</p>
                    </div>
                    <div class="product-item">
                        <img src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&w=400&q=80" alt="Electrical Materials" loading="lazy">
                        <p>Electrical Materials</p>
                    </div>
                    <div class="product-item">
                        <img src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?auto=format&fit=crop&w=400&q=80" alt="Stationery & Office" loading="lazy">
                        <p>Stationery & Office</p>
                    </div>
                    <div class="product-item">
                        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=400&q=80" alt="Accommodation" loading="lazy">
                        <p>Accommodation</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}