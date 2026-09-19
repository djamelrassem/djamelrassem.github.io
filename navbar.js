class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="top-nav">
        <a href="index.html">Home</a>
        <a href="research.html">Research</a>
        <a href="teaching.html">Teaching</a>
        <a href="cv.html">CV</a>
      </nav>
    `;
  }
}
customElements.define('my-navbar', Navbar);