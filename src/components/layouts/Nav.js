import React from "react";
import { useRef, useEffect } from "react";

function Nav() {
  const mainNav = useRef(null);

  useEffect(() => {
    // The DOM element is accessible here.

    const headerHeight = mainNav.clientHeight;
    let scrollPos = 0;

    window.addEventListener("scroll", function () {
      const currentTop = document.body.getBoundingClientRect().top * -1;

      if (currentTop < scrollPos) {
        // Scrolling Up
        if (currentTop > 0 && mainNav.current.classList.contains("is-fixed")) {
          mainNav.current.classList.add("is-visible");
        } else {
          console.log(123);
          mainNav.current.classList.remove("is-visible", "is-fixed");
        }
      } else {
        // Scrolling Down
        mainNav.current.classList.remove(["is-visible"]);
        if (
          currentTop > headerHeight &&
          !mainNav.current.classList.contains("is-fixed")
        ) {
          mainNav.current.classList.add("is-fixed");
        }
      }

      scrollPos = currentTop;
    });
  }, []);

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        id="mainNav"
        ref={mainNav}
      >
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="index.html">
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto py-4 py-lg-0">
              <li className="nav-item">
                <a className="nav-link px-lg-3 py-3 py-lg-4" href="index.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-lg-3 py-3 py-lg-4" href="about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-lg-3 py-3 py-lg-4" href="post.html">
                  Sample Post
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-lg-3 py-3 py-lg-4"
                  href="contact.html"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
