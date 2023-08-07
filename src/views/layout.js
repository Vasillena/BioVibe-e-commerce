import { html } from "../../node_modules/lit-html/lit-html.js";

export const layoutTemplate = (content) => html` <header>
    <div class="top">
      <div class="search">
        <i class="fa-solid fa-magnifying-glass" style="color: #444444"></i>
        <input type="search" placeholder="Search" />
      </div>
      <div class="logo">
        <img src="/src/styles/images/logo.png" alt="logo" />
      </div>
      <div class="cart">
        <div>
          <button class="menu-button">
            <i class="fa-solid fa-bars" style="color: #444444;"></i>
          </button>
        </div>
        <div>
          <a href="#">
            <i class="fa-brands fa-opencart" style="color: #444444"></i>
          </a>
        </div>
      </div>
    </div>

    <nav style="top: -100%;">
      <ul class="navbar-list">
        <li><a href="/" class="navbar-link">Home</a></li>
        <li>
          <a class="products" href="#">Products</a>
          <ul class="dropdown">
            <li><a href="/hairCare" class="navbar-link">Hair care</a></li>
            <li><a href="/bodyCare" class="navbar-link">Body care</a></li>
          </ul>
        </li>
        <li><a href="/aboutUs" class="navbar-link">About us</a></li>
        <li><a href="/contact" class="navbar-link">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="main-content">${content}</main>

  <footer>
    <div class="footer-nav">
      <ul class="footer-list">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Service</a></li>
        <li><a href="#">Refund Policy</a></li>
        <li><a href="#">Shipping Policy</a></li>
      </ul>
    </div>

    <div class="footer-bottom">
      <p class="copyright">
        &copy; 2023 BioVibe. All Rights Reserved | Crafted by
        <a
          href="https://github.com/Vasillena"
          target="_blank"
          class="github-link"
          >Vasillena</a
        >
      </p>
    </div>
  </footer>`;
