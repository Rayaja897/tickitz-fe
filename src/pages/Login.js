import "../style/Auth.css";
import "../style/Auth.mobile.css";

import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div id="login_page" style={{ overflow: "hidden" }}>
      <div className="row">
        {/* left content */}
        <div className="col col-md-7">
          <div className="left-content">
          <Link to="/">
            <img src="/images/Logo-white.png" className="logo" alt="logo" />
            </Link>
            <p className="Text">wait, watch, wow!</p>
          </div>
        </div>
        {/* Right content */}
        <div className="col col-md-5">
          <div className="pe-5 p-4 right-content">
            <div style={{ width: "100%" }}>
              <h1 style={{ fontSize: "48px" }}>Sign In</h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "#AAAAAA",
                  marginBottom: "20px",
                }}
              >
                Sign in with your data that you entered during
                <br/>
                your registration
              </p>

              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="Write your email"
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Password</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="Write your password"
                />
              </div>

              <div className="d-grid mb-3">
                <button className="btn btn-primary">Sign In</button>
              </div>

              <p className="text-center">
              Don’t have an account? {" "}
                <Link to="/register" style={{ color: "#5F2EEA" }}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
