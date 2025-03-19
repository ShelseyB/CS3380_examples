let createNav = (inner, pageName) => {
    return `<header>
    Test Web Page!
    <button class="menu-button" onclick="toggleMenu()">
      Menu
    </button>
  </header>
  <nav>
    <h3>Side Navigation</h3>
    <button class="close-nav" onclick="toggleMenu()">
      Close
    </button>
    <ul>
      <li style="${pageName == "page-2" ? "display: none;" : ""}">${createButton("page-2", "Page 2")}</li>
      <li style="${pageName == "home" ? "display: none;" : ""}">${createButton("home", "Home")}</li>
    </ul>
  </nav>
  <main>
    ${inner}
  </main>
  <footer>Footer</footer>`
}