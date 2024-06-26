import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import LoginWith from "./LoginWith";
import { useDispatch } from "react-redux";
import { handleLoginRedux } from "../redux/action/userAction";
import { toast } from "react-toastify";
import { auth } from "../firebase/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Missing Email/Password");
      return;
    }
    dispatch(handleLoginRedux(email, password));
    // navigate("/");
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user || localStorage.email) {
        // setUser(user);
        navigate("/");
      }
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div className="my-3">
                <label htmlFor="floatingInput">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p>
                  New Here?{" "}
                  <Link
                    to="/register"
                    className="text-decoration-underline text-info"
                  >
                    Register
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="button"
                  onClick={handleLogin}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <LoginWith />
      <Footer />
    </>
  );
};

export default Login;
