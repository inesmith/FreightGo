import React from 'react';

function Footer() {
  return (
    <footer className="footer">
             <div className="footer-section about-us">
          <h3>About FreightGo</h3>
          <p>FreightGo provides top-notch transport solutions, ensuring seamless and reliable delivery services tailored to your needs.</p>
        </div>
      <div className="footer-content">
        {/* Contact Section */}
        <div className="footer-section contact-info">
          <h4>Contact Us</h4>
          <p><b>Address:</b> 42 Aviation Street, Johannesburg</p>
          <p><b>Phone: </b>+27 79 727 2830</p>
          <p><b>Email: </b><a href="mailto:info@freightgo.co.za">info@freightgo.co.za</a></p>
          <p><b>Operating Hours:</b> Mon - Fri, 9:00 AM - 6:00 PM</p>
        </div>

        {/* Menu Section */}
        <div className="footer-section menu">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/bookings">Bookings</a></li>
            <li><a href="/profile">Profile</a></li>
            <li><a href="/tracking">Tracking</a></li>
          </ul>
        </div>

        {/* Recent Posts Section */}
        <div className="footer-section recent-posts">
          <h4>Recent Updates</h4>
          <ul>
            <li><a href="#">New Truck Fleet Added</a></li>
            <li><a href="#">FreightGo's Expansion Plans</a></li>
            <li><a href="#">Guide to Booking Deliveries Online</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <form>
            <input type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        
        </div>
      </div>

        <div className="footer-section social-links">
          <h3>Follow Us</h3>
          <a href="https://www.facebook.com/people/In%C3%A9-Smith/pfbid02CDMd9oLwyXu2QQdb3dnW1pahW9hLcG97t4mTavj9FpwEcQ3aWcuEXoAmemsPYaHNl/" 
          target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://www.instagram.com/ine_smith/" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
          <a href="https://www.instagram.com/ine_smith/" target="_blank" rel="noopener noreferrer"> Instagram</a>
        </div>  

      <div className="footer-bottom">
        <p>&copy; 2024 FreightGo. All rights reserved. Powered by <a href="#">MERN Stack</a>.</p>
      </div>
    </footer>
  );
}

export default Footer;
