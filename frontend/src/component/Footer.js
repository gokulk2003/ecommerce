import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="maindiv">
        <footer>
          <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
          </div>
          <ul className="social_icon">
            <li>
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instgram.com">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>

          <ul className="menu_footer">
            <li>
              <a>
                <Link to="/">Home</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/services">About us</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/products">Products</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/contactform">Contact us</Link>
              </a>
            </li>
            <li>
              <a>
                <Link to="/sign-up">Login / Sign-Up</Link>
              </a>
            </li>
          </ul>

          <p>@2023 Offerz | All Rights Reserved</p>
        </footer>
        <script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></script>
      </div>
    </>
    // <div className="footer-container">
    //   <section class="social-media">
    //     <div class="social-media-wrap">
    //       <div class="footer-logo">
    //         <Link to="/" className="social-logo">
    //           OFFERZ...
    //           {/* <i class='fab fa-typo3' /> */}
    //         </Link>
    //       </div>
    //       <small class="website-rights">OFFERZ © 2020</small>
    //       <div class="social-icons">
    //         <Link
    //           class="social-icon-link facebook"
    //           to="/"
    //           target="_blank"
    //           aria-label="Facebook"
    //         >
    //           <i class="fab fa-facebook-f" />
    //         </Link>
    //         <Link
    //           class="social-icon-link instagram"
    //           to="/"
    //           target="_blank"
    //           aria-label="Instagram"
    //         >
    //           <i class="fab fa-instagram" />
    //         </Link>
    //         <Link
    //           class="social-icon-link youtube"
    //           to="/"
    //           target="_blank"
    //           aria-label="Youtube"
    //         >
    //           <i class="fab fa-youtube" />
    //         </Link>
    //         <Link
    //           class="social-icon-link twitter"
    //           to="/"
    //           target="_blank"
    //           aria-label="Twitter"
    //         >
    //           <i class="fab fa-twitter" />
    //         </Link>
    //         <Link
    //           class="social-icon-link twitter"
    //           to="/"
    //           target="_blank"
    //           aria-label="LinkedIn"
    //         >
    //           <i class="fab fa-linkedin" />
    //         </Link>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default Footer;
