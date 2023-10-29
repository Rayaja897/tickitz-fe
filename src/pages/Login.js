import axios from "axios";
import "../style/Auth.css";
import "../style/Auth.mobile.css";

import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
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

  const handleLogin = () => {
    setIsLoading(true);
    setErrMsg(null);

    axios
      .post("https://tickitz-be.onrender.com/rayhan/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response?.data?.data?.token;
        const profile = response?.data?.data?.result;

        localStorage.setItem("token", token);
        localStorage.setItem("profile", JSON.stringify(profile));
        setIsSucc(true);
      })
      .catch((error) => {
        const errEmail = error?.response?.data?.messages?.email?.message;
        const errPassword = error?.response?.data?.messages?.password?.message;

        setIsSucc(false);
        setErrMsg(
          errEmail ??
            errPassword ??
            error?.response?.data?.messages ??
            "Something wrong in our app"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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
                <br />
                your registration
              </p>

              {isSucc ? (
                <div className="alert alert-success" role="alert">
                  Login success, please wait for redirect to our app.
                </div>
              ) : null}

              {errMsg ? (
                <div className="alert alert-danger" role="alert">
                  {errMsg}
                </div>
              ) : null}

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
                  className="btn btn-primary"
                  onClick={handleLogin}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Sign In"}
                </button>
              </div>

              <p className="text-center">
                Don’t have an account?{" "}
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
