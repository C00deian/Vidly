import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user }) {
  const routePage = [
    { link: "/movies", name: "Movies" },
    { link: "/customers", name: "Customers" },
    { link: "/rentals", name: "Rentals" },
  ];

  user
    ? routePage.push({ link: "/logout", name: "Logout" })
    : routePage.push(
        { link: "/login", name: "Login" },
        { link: "/register", name: "Register" }
      );

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/movies">
        Vidly
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {routePage.map((page, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={page.link}>
                  {page.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        {user && (
          <span className="navbar-text ml-auto">
            Welcome,{" "}
            <strong className="font-bold text-info">{user.name}</strong>
          </span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
