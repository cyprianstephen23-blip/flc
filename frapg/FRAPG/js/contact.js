// Renders Contact page
function renderContact() {
    const app = document.getElementById('app');

    app.innerHTML = `
        <!-- ================= HERO ================= -->
        <section class="hero page-hero" style="background-image: url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1600&q=80');">
            <div class="hero-overlay"></div>
            <div class="container hero-content">
                <p class="hero-eyebrow">Home / Contact</p>
                <h1>Contact Us</h1>
                <p class="hero-text">We are here to help you.</p>
            </div>
        </section>

        <!-- ================= CONTACT SECTION ================= -->
        <section class="section">
            <div class="container">
                <div class="contact-grid">

                    <!-- Left: Get In Touch -->
                    <div class="contact-info">
                        <h2 class="section-title-left">Get In Touch</h2>
                        <p class="section-sub-left">
                            Whether you have a question, need a quote, or want to book a stay, 
                            our team is ready to hear from you.
                        </p>

                        <ul class="contact-details">
                            <li>
                                <span class="contact-icon">📞</span>
                                <div>
                                    <strong>Phone</strong>
                                    <p>+255 754 456 789</p>
                                </div>
                            </li>
                            <li>
                                <span class="contact-icon">✉️</span>
                                <div>
                                    <strong>Email</strong>
                                    <p>info@frapg.co.tz</p>
                                </div>
                            </li>
                            <li>
                                <span class="contact-icon">📍</span>
                                <div>
                                    <strong>Location</strong>
                                    <p>Mikumi, Morogoro, Tanzania</p>
                                </div>
                            </li>
                        </ul>

                        <!-- Map Placeholder -->
                        <div class="map-wrapper">
                            <iframe 
                                src="https://www.google.com/maps?q=Mikumi,+Morogoro,+Tanzania&output=embed" 
                                width="100%" 
                                height="250" 
                                style="border:0;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                    <!-- Right: Form -->
                    <div class="contact-form-wrapper">
                        <h2 class="section-title-left">Send Us a Message</h2>

                        <form class="contact-form" onsubmit="event.preventDefault(); alert('Message sent! (Demo only)');">
                            <div class="form-group">
                                <label for="name">Full Name *</label>
                                <input type="text" id="name" name="name" placeholder="Your name" required>
                            </div>

                            <div class="form-group">
                                <label for="email">Email Address *</label>
                                <input type="email" id="email" name="email" placeholder="you@example.com" required>
                            </div>

                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <select id="subject" name="subject">
                                    <option value="">General Inquiry</option>
                                    <option value="construction">Construction & Supply</option>
                                    <option value="supply">General Supplies</option>
                                    <option value="booking">Camp & Lodge Booking</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="message">Message *</label>
                                <textarea id="message" name="message" rows="5" placeholder="Tell us how we can help..." required></textarea>
                            </div>

                            <button type="submit" class="btn btn-yellow btn-block">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    `;
}