import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [links, setLinks] = useState({
    link1: ["/top", "High Priority"],
    link2: ["/all", "All"],
    link3: ["/kanban", "Kanban Board"],
    link4: ["/archive", "Archive"],
    link5: ["profile", "Profile"],
  });

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  return (
    <div className="container-fluid prime-bg" id="header">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div className="col"></div>
        <div className="col">
          <nav className="navBar">
            <button
              style={{ backgroundColor: "#e0d9ee" }}
              className={`${navbarOpen ? "navButtonOpen" : "navButtonClosed"}`}
              onClick={handleToggle}
            >
              {navbarOpen ? "<" : ">"}
            </button>
            <ul
              className={`menuNav ${
                navbarOpen ? "linksOpen showMenu" : "linksClosed"
              }`}
            >
              <li></li>
              <li>
                <Link to={links.link1[0]}>{links.link1[1]}</Link>
              </li>
              <li>
                <Link to={links.link2[0]}>{links.link2[1]}</Link>
              </li>
              <li>
                <Link to={links.link3[0]}>{links.link3[1]}</Link>
              </li>
              <li>
                <Link to={links.link4[0]}>{links.link4[1]}</Link>
              </li>
              <li>
                <Link to={links.link5[0]}>{links.link5[1]}</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col">
          <h1>Trackie the Tracker</h1>
        </div>
        <div className="col "></div>
        <div className="col"></div>
      </nav>
    </div>
  );
}

export default Navbar;
