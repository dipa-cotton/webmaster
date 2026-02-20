class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
  <nav class="navbar">

    <div class="menu-toggle" id="menu-toggle">☰</div>

    <div class="nav-left">
    <nav class="navbar">
      <a href="index.html">
        <img src="images/logorl.png" alt="Jobees Robotics Logo" class="logo">
      </a>
    </div>
    <h2 class="site-title" style="margin: 10px; ">Arbor Lakes</h2>

    <ul class="nav-links" id="nav-links">
      <li><a href="index.html">Home</a></li>
      <div class="menu">
  <button class="menu-btn">Events ▾</button>

  <div class="dropdown">
    <a href="events.html#meetings">Meetings</a>
    <a href="events.html#upcoming">Upcoming</a>
    <a href="events.html#past">Past</a>
  </div>
</div>
      <li><a href="about.html">Who We Are</a></li>
      <li><a href="resource.html">Resource Hub</a></li>
      <li><a href="reference.html">Reference Page</a></li>
    </ul>

  </nav>
</header>

    `;
  }
}

customElements.define("site-header", SiteHeader);
