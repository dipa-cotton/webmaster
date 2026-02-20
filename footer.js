class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
  <div class="footer-sections">
    <div class="footer-section">
      <h4>Quick Links</h4>
         <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="about.html">Who We Are</a></li>
      <li><a href="resource.html">Resource Hub</a></li>
      <li><a href="reference.html">Reference Page</a></li>
    </ul>
    </div>
    <div class="footer-section">
    
      <h4>Contact Us</h4>
      <p>Email: arborlakes@gmail.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>© 2026 Arbor Lakes</p>
    </div>
    <a href="index.html">
        <img src="images/logorl.png" alt="Arbor Lakes Logo" class="logo">
      </a>
  </div>
</footer>
    `;
  }
}

customElements.define("site-footer", SiteFooter);