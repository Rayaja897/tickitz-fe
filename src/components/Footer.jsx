import React from "react";
import IconText from "../components/IconText";

function Footer() {
  return (
    <>
      {/* <!-- Start Footer --> */}
      <footer className="container pb-3 pt-5">
        <div className="row">
          <div className="col-sm-3 col-xs-12">
            <div className="d-flex justify-content-center-mobile">
              <img className="mb-3" src="/images/Logo.png" alt="Logo" />
            </div>
            <p className="text-center-mobile">
              Stop waiting in line. Buy tickets <br />
              conveniently, watch movies quietly.
            </p>
          </div>
          <div className="mt-3 col-sm-3 col-xs-12">
            <h6 className="mb-4 text-center-mobile">Explore</h6>
            <a
              className="text-center-mobile"
              style={{ display: "block", fontWeight: "350" }}
              href="/#"
            >
              Home
            </a>
            <a
              className="text-center-mobile"
              style={{ display: "block", fontWeight: "350" }}
              href="/#"
            >
              List Movie
            </a>
          </div>
          <div className="col-sm-3 col-xs-12">
            <h6 className="mt-3 mb-4 text-center-mobile">Our Sponsor</h6>
            <div className="d-flex justify-content-center-mobile">
              <img
                className="mb-3"
                style={{ display: "block" }}
                src="/images/cinemas/ebv.id 2.jpg"
                alt="sponsor"
              />
            </div>
            <div className="d-flex justify-content-center-mobile">
              <img
                className="mb-3"
                style={{ display: "block" }}
                src="/images/cinemas/CineOne21 2.jpg"
                alt="sponsor"
              />
            </div>
            <div className="d-flex justify-content-center-mobile">
              <img
                className="mb-3"
                style={{ display: "block" }}
                src="/images/cinemas/hiflix 2.jpg"
                alt="sponsor"
              />
            </div>
          </div>
          <div className="mt-3 col-sm-3 col-xs-12">
            <h6 className="mb-4 text-center-mobile">Follow Us</h6>
            <IconText
              icon="/images/sosmed/eva_facebook-outline.svg"
              text="Tickitz Cinema id"
            />
            <IconText
              icon="/images/sosmed/bx_bxl-instagram.svg"
              text="tickitz.id"
            />
            <IconText
              icon="/images/sosmed/eva_twitter-outline.svg"
              text="tickitz.id"
            />
            <IconText
              icon="/images/sosmed/feather_youtube.svg"
              text="Tickitz Cinema id"
            />
          </div>
        </div>
        <p className="text-center mt-4 mb-2">
          © 2020 Tickitz. All Rights Reserved.
        </p>
      </footer>
      {/* <!-- End Footer --> */}
    </>
  );
}

export default Footer;
