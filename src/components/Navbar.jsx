import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOutWithGoogle, auth } from "../firebase/firebase";
import { handleLogoutRedux } from "../redux/action/userAction";

const Navbar = () => {
  const state = useSelector((state) => state?.handleCart);
  const userV2 = useSelector((state) => state?.user?.account);
  const dispatch = useDispatch();

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(handleLogoutRedux());
    signOutWithGoogle();
    setUser(null);
    navigate("/login");
  };

  const HadLogin = () => (
    <NavLink className="btn btn-outline-dark m-2" onClick={handleLogout}>
      <i className="fa fa-sign-in-alt mr-1"></i> Logout
    </NavLink>
  );
  const NotLogin = () => (
    <NavLink to="/login" className="btn btn-outline-dark m-2">
      <i className="fa fa-sign-in-alt mr-1"></i> Login
    </NavLink>
  );

  //check login
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && user.auth) setUser(user);
      if (userV2 && userV2.auth === true) {
        setUser(userV2);
      }
    });
  }, [userV2]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          {" "}
          React Project
        </NavLink>
        <button
          className="navbar-toggler mx-2"
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
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            {user && user.auth && (
              <span className="nav-link">
                Welcome{" "}
                <b>
                  {user.displayName} ({user.email}){" "}
                  {!user.photoURL ? null : (
                    <>
                      <img
                        src={user.photoURL}
                        alt="img"
                        style={{
                          width: "35px",
                          borderRadius: "100%",
                          border: "1px solid lightgray",
                        }}
                      />
                    </>
                  )}
                </b>
              </span>
            )}
            {/* {userV2 && userV2.auth === true && (
              <span className="nav-link">
                Welcome{" "}
                <b>
                  {userV2.displayName} ({userV2.email}){" "}
                  {!userV2.photoURL ? null : (
                    <>
                      <img
                        src={userV2.photoURL}
                        style={{
                          width: "35px",
                          borderRadius: "100%",
                          border: "1px solid lightgray",
                        }}
                      />
                    </>
                  )}
                </b>
              </span>
            )} */}

            <NavLink to="/user/login" className="btn btn-outline-dark m-2">
              <i className="fa fa-sign-in-alt mr-1"></i> Login V2
            </NavLink>
            {user && user.auth ? <HadLogin /> : <NotLogin />}
            <NavLink to="/register" className="btn btn-outline-dark m-2">
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}){" "}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
