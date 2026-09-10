// Renders Camp & Lodge page
function renderCamp() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <!-- ================= HERO ================= -->
        <section class="hero page-hero" style="background-image: url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80');">
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <p class="hero-eyebrow">Home / Camp & Lodge</p>
                <h1>FRAPG Camp & Lodge</h1>
                <p class="hero-text">Luxury in Nature — Relax. Explore. Enjoy.</p>
            </div>
        </section>

        <!-- ================= ABOUT THE CAMP ================= -->
        <section class="section">
            <div class="container">
                <div class="about-grid">
                    <div class="about-text">
                        <h2 class="section-title-left">About the Camp</h2>
                        <p>
                            FRAPG Camp & Lodge is a 4-star retreat nestled in Mikumi, Morogoro, Tanzania — 
                            just moments from the gates of Mikumi National Park [citation:1][citation:3].
                        </p>
                        <p>
                            Our camp features standalone chalets designed for privacy and comfort, 
                            surrounded by lush gardens and the sounds of nature. With only a handful of 
                            rooms, you will never feel crowded [citation:2].
                        </p>
                        <p>
                            Whether you are here for a safari adventure or a quiet escape, our team is 
                            available 24/7 to make your stay unforgettable [citation:3].
                        </p>
                    </div>
                    <div class="about-image">
                        <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80" alt="FRAPG Camp" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= FACILITIES & FEATURES ================= -->
        <section class="section bg-light-green">
            <div class="container">
                <h2 class="text-center">Facilities & Features</h2>
                <p class="section-desc text-center">Everything you need for a comfortable and memorable stay.</p>

                <div class="grid-4" style="margin-top: 2.5rem;">
                    <div class="feature-item">🏊 Outdoor Swimming Pool</div>
                    <div class="feature-item">🍽️ On-Site Restaurant</div>
                    <div class="feature-item">🍹 Bar & Lounge</div>
                    <div class="feature-item">🌳 Garden & Terrace</div>
                    <div class="feature-item">📶 Free Wi-Fi</div>
                    <div class="feature-item">🅿️ Free Private Parking</div>
                    <div class="feature-item">🚐 Airport Shuttle (Paid)</div>
                    <div class="feature-item">🕒 24-Hour Front Desk</div>
                </div>
            </div>
        </section>

        <!-- ================= DINING ================= -->
        <section class="section">
            <div class="container">
                <div class="about-grid">
                    <div class="about-text">
                        <h2 class="section-title-left">Dine & Delight</h2>
                        <p>
                            Our on-site restaurant, <strong>FRAPG Restaurant</strong>, serves a delicious 
                            blend of African, British, Italian, and international cuisine [citation:2][citation:3].
                        </p>
                        <p>
                            We cater to all dietary needs, including <strong>halal, vegetarian, vegan, 
                            gluten-free, and dairy-free</strong> options [citation:2].
                        </p>
                        <p>
                            Enjoy your meal in our traditional, modern, or romantic dining setting, 
                            or by the sparkling swimming pool [citation:3].
                        </p>
                    </div>
                    <div class="about-image">
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80" alt="FRAPG Restaurant" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= OUR ROOMS ================= -->
        <section class="section bg-light-green">
            <div class="container">
                <h2 class="text-center">Our Rooms</h2>
                <p class="section-desc text-center">Comfortable stays in a peaceful natural setting.</p>

                <div class="grid-3" style="margin-top: 2.5rem;">
                    <!-- Standard Room -->
                    <div class="card room-card">
                        <div class="card-image">
                            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80" alt="Standard Room" loading="lazy">
                        </div>
                        <div class="card-body">
                            <h3>Standard Room</h3>
                            <p>25 m² — Perfect for solo travellers or business trips [citation:7].</p>
                            <ul class="room-amenities">
                                <li>1 Single Bed</li>
                                <li>Air Conditioning</li>
                                <li>Private Bathroom</li>
                                <li>Garden View</li>
                            </ul>
                            <div class="room-footer">
                                <span class="room-price">From $85/night</span>
                                <a href="#contact" class="btn btn-primary btn-sm">Book</a>
                            </div>
                        </div>
                    </div>

                    <!-- Double Room with Balcony -->
                    <div class="card room-card">
                        <div class="card-image">
                            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" alt="Double Room" loading="lazy">
                        </div>
                        <div class="card-body">
                            <h3>Double Room with Balcony</h3>
                            <p>20 m² — Spacious and comfortable for couples [citation:7].</p>
                            <ul class="room-amenities">
                                <li>1 Double Bed</li>
                                <li>Air Conditioning</li>
                                <li>Private Balcony</li>
                                <li>Pool or Garden View</li>
                            </ul>
                            <div class="room-footer">
                                <span class="room-price">From $95/night</span>
                                <a href="#contact" class="btn btn-primary btn-sm">Book</a>
                            </div>
                        </div>
                    </div>

                    <!-- Double or Twin Room -->
                    <div class="card room-card">
                        <div class="card-image">
                            <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80" alt="Family Room" loading="lazy">
                        </div>
                        <div class="card-body">
                            <h3>Double or Twin Room</h3>
                            <p>35 m² — Ideal for families and groups [citation:6].</p>
                            <ul class="room-amenities">
                                <li>Up to 4 Guests</li>
                                <li>Air Conditioning</li>
                                <li>Private Bathroom</li>
                                <li>Extra Long Beds</li>
                            </ul>
                            <div class="room-footer">
                                <span class="room-price">From $120/night</span>
                                <a href="#contact" class="btn btn-primary btn-sm">Book</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= ROOM AMENITIES ================= -->
        <section class="section">
            <div class="container">
                <h2 class="text-center">In Every Room</h2>
                <div class="grid-4" style="margin-top: 2.5rem;">
                    <div class="feature-item">📺 Flat-Screen TV</div>
                    <div class="feature-item">❄️ Air Conditioning</div>
                    <div class="feature-item">🧊 Refrigerator</div>
                    <div class="feature-item">🚿 Private Bathroom</div>
                    <div class="feature-item">🛏️ Mosquito Net</div>
                    <div class="feature-item">💼 Work Desk</div>
                    <div class="feature-item">☕ Free Bottled Water</div>
                    <div class="feature-item">🌅 Balcony/Patio</div>
                </div>
            </div>
        </section>

        <!-- ================= SAFARI & ACTIVITIES ================= -->
        <section class="section bg-light-green">
            <div class="container">
                <div class="about-grid">
                    <div class="about-text">
                        <h2 class="section-title-left">Safari & Activities</h2>
                        <p>
                            FRAPG Camp is your gateway to the wild. We organize unforgettable safari 
                            tours to <strong>Mikumi, Serengeti, and Nyerere National Parks</strong>.
                        </p>
                        <p>
                            For the adventurous, we also arrange hiking and trekking expeditions on 
                            <strong>Mount Kilimanjaro, Mount Meru, and the Usambara Mountains</strong>.
                        </p>
                        <p>
                            Closer to camp, enjoy a guided nature walk or simply relax by the pool 
                            as warthogs and other wildlife wander through the gardens [citation:2].
                        </p>
                    </div>
                    <div class="about-image">
                        <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=800&q=80" alt="Safari at Mikumi" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= GALLERY ================= -->
        <section class="section">
            <div class="container">
                <h2 class="text-center">Gallery</h2>
                <p class="section-desc text-center">A glimpse of life at FRAPG Camp & Lodge.</p>

                <div class="grid-4" style="margin-top: 2.5rem;">
                    <div class="gallery-item">
                        <img src= "assets/images/camp/outdoor.jpeg" alt="Swimming Pool" loading="lazy">
                    </div>
                    <div class="gallery-item">
                        <img src="assets/images/camp/restaurant.jpeg" alt="Restaurant" loading="lazy">
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80" alt="Garden" loading="lazy">
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=600&q=80" alt="Safari" loading="lazy">
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600&q=80" alt="Room" loading="lazy">
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=600&q=80" alt="Room" loading="lazy">
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80" alt="Room" loading="lazy">
                    </div>
                    <div class="gallery-item">
                        <img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=600&q=80" alt="Pool" loading="lazy">
                    </div>
                </div>
            </div>
        </section>

        <!-- ================= LOCATION ================= -->
        <section class="section bg-light-green">
            <div class="container">
                <h2 class="text-center">Location</h2>
                <p class="section-desc text-center">
                    FRAPG HOTEL & CAMP Building, Mikumi, Morogoro, Tanzania [citation:1].
                </p>

                <div class="map-wrapper" style="margin-top: 2rem;">
                    <iframe 
                        src="https://www.google.com/maps?q=FRAPG+Camp+and+Lodge+Mikumi+Tanzania&output=embed" 
                        width="100%" 
                        height="350" 
                        style="border:0;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </section>

        <!-- ================= CTA ================= -->
        <section class="section banner-cta" style="background-image: url('https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=80');">
            <div class="banner-overlay"></div>
            <div class="container banner-content">
                <h2>Your perfect getaway is waiting for you.</h2>
                <p class="banner-sub">Check-in: 12:00 PM — Check-out: 10:00 AM [citation:5].</p>
                <a href="#contact" class="btn btn-yellow" style="margin-top: 1.5rem;">Book Your Stay</a>
            </div>
        </section>
    `;
}