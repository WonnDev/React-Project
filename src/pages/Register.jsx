import React, { useEffect, useState } from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";
import { createUser } from "../firebase/authentication";
import { auth } from "../firebase/firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  //check login
  const [user, setUser] = useState(null);

  const handleRegister = () => {
    if (!email || !password) {
      console.log("Email && Password are Required!");
      return;
    }
    createUser(email, password, name);
    setEmail("");
    setPassword("");
    setName("");
    setUser(null);
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user && user.auth) {
        setUser(user);
      }
    });
  }, [user]);

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              {/* <div className="form my-3">
                <label htmlFor="Name">Your name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Your Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div> */}
              <div className="form my-3">
                <label htmlFor="Email">Email address</label>
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="my-3">
                <p>
                  Already has an account?{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    Login
                  </Link>{" "}
                </p>
              </div>
              <div className="text-center">
                <button
                  className="my-2 mx-auto btn btn-dark"
                  type="button"
                  onClick={handleRegister}
                  disabled={user && user.auth}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
