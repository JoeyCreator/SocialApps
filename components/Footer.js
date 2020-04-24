import React from "react";
import "./style/style.css";

function Footer() {
  return (
    <footer id="footer" className="center">
      <p>
        <a href="index.html">Home</a> | <a href="examples.html">Examples</a> |{" "}
        <a href="page.html">Terms OF Services</a> |{" "}
        <a href="another_page.html">Subscription</a> |{" "}
        <a href="contact.html">Contact Us</a>
      </p>
      <p>
        Copyright &copy; 2020 Social Apps. All Right Reserved |{" "}
        <a href="https://support-techwithjoey.com/">Support Center</a> |{" "}
        <a href="https://techwithjoey.com/">TechWithJoey</a>
      </p>
    </footer>
  );
}

export default Footer;
