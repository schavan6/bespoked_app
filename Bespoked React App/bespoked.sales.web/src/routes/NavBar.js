import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Sales Persons
            </Link>

            <Link className="nav-item nav-link" to="/products">
              Products
            </Link>

            <Link className="nav-item nav-link" to="/customers">
              Customers
            </Link>

            <Link className="nav-item nav-link" to="/sales">
              Sales
            </Link>

            <Link className="nav-item nav-link" to="/report">
              Commision Report
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
