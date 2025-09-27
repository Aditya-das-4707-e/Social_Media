import React from "react";

const Header = () => {
  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.5,22.2c-2.3,2.3-5.4,3.5-8.5,3.5s-6.2-1.2-8.5-3.5c-2.3-2.3-3.5-5.4-3.5-8.5c0-3.1,1.2-6.2,3.5-8.5c2.3-2.3,5.4-3.5,8.5-3.5s6.2,1.2,8.5,3.5c2.3,2.3,3.5,5.4,3.5,8.5C28,16.8,26.8,19.9,24.5,22.2z M16,5.3c-2.4,0-4.7,0.9-6.4,2.6C7.9,9.6,7,11.9,7,14.3c0,2.4,0.9,4.7,2.6,6.4c1.7,1.7,4,2.6,6.4,2.6s4.7-0.9,6.4-2.6c1.7-1.7,2.6-4,2.6-6.4c0-2.4-0.9-4.7-2.6-6.4C20.7,6.2,18.4,5.3,16,5.3z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-secondary">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  About
                </a>
              </li>
            </ul>

            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2">
                Login
              </button>
              <button type="button" className="btn btn-warning">
                Sign-up
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
