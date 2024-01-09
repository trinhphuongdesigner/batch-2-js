import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { LOCATION, locations } from 'constants/index';

function Header(props) {
  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {
              locations.map((l) => {
                if (!l.isHidden) {
                  return (
                    <li key={l.path} className={`nav-item ${location.pathname === l.path ? 'active' : ''}`}>
                    <Link className="nav-link" to={l.path}>
                      {l.name}
                    </Link>
                  </li>
                  )
                }

                return null;
              })
            }



            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
