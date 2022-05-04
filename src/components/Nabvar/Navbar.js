import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import logo from '../../img/logo.png'


const Navbar = () => {
  const [user]=useAuthState(auth)
  const handleSignOut=()=>{
    signOut(auth);
  }
 
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid px-5">
            <img className="w-12" src={logo} alt="" />
            <Link className="navbar-brand ml-5 font-bold" to="/">
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
                  <Link
                    to="/home"
                    className="nav-link active font-bold"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active font-bold" to="/inventory">
                    Inventory
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active font-bold" to="/myitem">
                    My Item
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link to="/blogs" className="nav-link active font-bold ">
                    Blogs
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                {user ? (
                  <button
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    type="submit"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                ) : (
                  <Link to="/login">
                    <button
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-black py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      type="submit"
                    >
                      Login
                    </button>
                  </Link>
                )}
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
                        }

export default Navbar;