import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar()
{
    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
                Lisbon
              </a>
            </li>
            <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
                Paris
              </a>
            </li>
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
                Sydney
              </a>
            </li>
             <li className="nav-item">
             <a className="nav-link active" aria-current="page" href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
                San Francisco
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}