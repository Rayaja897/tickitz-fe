import "../style/Auth.css";
import "../style/Auth.mobile.css";

import React from "react";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div id="register_page" style={{ overflow: "hidden" }}>
      <div className="row">
        {/* left content */}
        <div className="col col-md-7">
          <div className="left-content">
            <img src="/images/Logo-white.png" alt="logo" />
            <p className="Text">wait, watch, wow!</p>
          </div>
        </div>
        {/* Right content */}
        <div className="col col-md-5">
          <div className="pe-5 p-4 right-content">
            <div style={{width:"100%"}}>
            <h1 style={{ fontSize: "48px" }}>Sign Up</h1>
            <p style={{ fontSize: "18px", color: "#AAAAAA", marginBottom:"25px" }}>
              Fill your additional details
            </p>

            <div className="mb-2">
              <label className="form-label">Full Name</label>
              <input
                className="form-control form-control-lg"
                placeholder="Write your full name"
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Phone Number</label>
              <input
                className="form-control form-control-lg"
                placeholder="Write your phone number"
              />
            </div>

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
              <button className="btn btn-primary">Sign Up</button>
            </div>

            <p className="text-center">
              Already have account ?{" "}
              <Link to="/login" style={{ color: "#5F2EEA" }}>
                Sign In
              </Link>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
