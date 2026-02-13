class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
  <nav class="navbar">

    <div class="menu-toggle" id="menu-toggle">☰</div>

    <div class="nav-left">
    <nav class="navbar">
      <a href="index.html">
        <img src="images/tiny.png" alt="Jobees Robotics Logo" class="logo">
      </a>
    </div>
    <h2 class="site-title" font size= style="margin: 10px;">Jobees Robotics</h2>

    <ul class="nav-links" id="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="first.html">FIRST</a></li>
      <li><a href="events.html">Events</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="resource.html">Resource Hub</a></li>
      <li><a href="reference.html">Reference Page</a></li>
    </ul>

  </nav>
</header>

    `;
  }
}

customElements.define("site-header", SiteHeader);
