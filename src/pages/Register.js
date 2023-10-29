import axios from "axios";
import "../style/Auth.css";
import "../style/Auth.mobile.css";

import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [fullName, setFullName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSucc, setIsSucc] = React.useState(false);
  const [errMsg, setErrMsg] = React.useState(null);

  React.useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("profile")) {
      navigate("/");
    }
  });

  const handleRegister = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios
      .post("https://tickitz-be.onrender.com/rayhan/auth/register", {
        email: email,
        password: password,
        fullname: fullName,
        phone_number: phoneNumber,
      })
      .then(() => {
        setIsSucc(true);
      })
      .catch((error) => {
        const errFullName = error?.response?.data?.messages?.fullname?.message;
        const errPhoneNumber =
          error?.response?.data?.messages?.phone_number?.message;
        const errEmail = error?.response?.data?.messages?.email?.message;
        const errPassword = error?.response?.data?.messages?.password?.message;

        setIsSucc(false);
        setErrMsg(
          errFullName ??
            errPhoneNumber ??
            errEmail ??
            errPassword ??
            "Something wrong in our app"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div id="register_page" style={{ overflow: "hidden" }}>
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
              <h1 style={{ fontSize: "48px" }}>Sign Up</h1>
              <p
                style={{
                  fontSize: "18px",
                  color: "#AAAAAA",
                  marginBottom: "25px",
                }}
              >
                Fill your additional details
              </p>

              {isSucc ? (
                <div className="alert alert-success" role="alert">
                  Register account success, please check your email.
                </div>
              ) : null}

              {errMsg ? (
                <div className="alert alert-danger" role="alert">
                  {errMsg}
                </div>
              ) : null}

              <div className="mb-2">
                <label className="form-label">Full Name</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="Write your full name"
                  onChange={(event) => {
                    setFullName(event.target.value);
                  }}
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Phone Number</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="Write your phone number"
                  onChange={(event) => {
                    setPhoneNumber(event.target.value);
                  }}
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Email</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="Write your email"
                  type="email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>

              <div className="mb-2">
                <label className="form-label">Password</label>
                <input
                  className="form-control form-control-lg"
                  placeholder="Write your password"
                  type="password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>

              <div className="d-grid mb-3">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={handleRegister}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Sign Up"}
                </button>
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
