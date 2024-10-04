import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const routePage = [
    { link: "/", name: "Movies" },
    { link: "/home", name: "Home" },
    { link: "/customers", name: "Customers" },
    { link: "/rentals", name: "Rentals" },
  ];

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" to="/">
        Vidly
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          {routePage.map((page) => {
            return (
              <li class="nav-item">
                <Link class="nav-link" to={page.link}>
                  {page.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
