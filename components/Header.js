import React from "react";
import "./style/style.css";

function Header() {
  return (
    <header>
      <div id="header">
        <div id="logo">
          <div id="logo_text">
            <h1>
              <a href="index.html">
                S I M P L E <span class="logo_colour">Social Apps</span>
              </a>
            </h1>
            <h2>React Application Development</h2>
          </div>
        </div>
        <div id="menubar">
          <ul id="menu">
            <li class="selected">
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="examples.html">Examples</a>
            </li>
            <li>
              <a href="page.html">A Page</a>
            </li>
            <li>
              <a href="another_page.html">Another Page</a>
            </li>
            <li>
              <a href="contact.html">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
export default Header;
