import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png'


const Navbar = () => {
  
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid px-5">
            <img className="w-12" src={logo} alt="" />
            <Link className="navbar-brand ml-5" to="/">
              Car Warehouse
            </Link>

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
                  <Link to="/home" className="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/myitem">
                    My Item
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/blogs" className="nav-link ">
                    Blogs
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <Link to="/login">
                  <button className="btn btn-outline-success" type="submit">
                    Login
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
                        }

export default Navbar;