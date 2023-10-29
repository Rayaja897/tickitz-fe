import "../style/Home.css";
import "../style/Home.mobile.css";
import MovieComp from "../components/Movie";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import axios from "axios";

function Home() {
  const date = new Date();
  const month = date.toLocaleDateString("default", { month: "short" });

  const [resultNowShowing, setResultNowShowing] = React.useState([]);
  const [resultUpComing, setResultUpComing] = React.useState([]);
  const [selectedMonth, setSelectedMonth] = React.useState(month.toLowerCase());

  //lifecycle
  const handleGetResponse = async () => {
    try {
      // get data for now showing
      const nowShowing = await axios.get(
        "https://tickitz-be.onrender.com/rayhan/movie/now-showing"
      );

      if (nowShowing.status === 200) {
        setResultNowShowing(nowShowing.data.data);
      }

      // get data for up coming
      const UpComing = await axios.get(
        "https://tickitz-be.onrender.com/rayhan/movie/upcoming"
      );

      if (UpComing.status === 200) {
        setResultUpComing(UpComing.data.data);
      }
    } catch (error) {
      console.log(`error : ${error}`);
    }
  };

  React.useEffect(() => {
    handleGetResponse();
  }, []);
  return (
    <div className="App">
      {/* <!-- Start Header --> */}
      <header className="container pt-3">
        <Navbar />
        {/* <!-- Start Content --> */}
        <section className="mt-6">
          <div className="row align-items-center">
            <div className="col-md-6 col-xs-12">
              <span className="text-muted">Nearest Cinema, Newest Movie,</span>
              <h1 className="text-primary">Find out now!</h1>
            </div>
            <div className="col-md-6 col-xs-12">
              <img src="/images/HeaderBanner.png" width="100%" alt="Poster" />
            </div>
          </div>
        </section>
        {/* <!-- End Content --> */}
      </header>
      {/* <!-- End Header --> */}
      {/* <!-- Start Now Showing --> */}
      <section id="now-showing">
        <div className="container py-4">
          {/* <!-- Header Tittle --> */}
          <div className="d-flex justify-content-between">
            <h2 className="text-primary">Now Showing</h2>
            <a className="text-primary" href="/#">
              View All
            </a>
          </div>
          {/* <!-- Content Now Showing for desktop--> */}
          <div className="d-flex justify-content-around mt-5 content">
            {resultNowShowing.slice(0, 5).map((item) => (
              <MovieComp
                poster={item.poster}
                title={item.tittle}
                genres={item.genres}
              />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- End Now Showing --> */}
      {/* <!-- Start Upcoming Movies --> */}
      <section id="upcoming-movies">
        <div className="container py-4">
          {/* <!-- Header Tittle --> */}
          <div className="d-flex justify-content-between">
            <h2>Upcoming Movies</h2>
            <a className="text-primary" href="/#">
              View All
            </a>
          </div>
          {/* <!-- Months List --> */}
          <div className="absolute-mobile">
            <div className="d-flex mt-4 month-view Months-scroll">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((item) => (
                <button
                  className={
                    selectedMonth === item.toLowerCase()
                      ? "btn btn-primary px-4"
                      : "btn btn-outline-primary px-4"
                  }
                  onClick={() => {
                    setSelectedMonth(item.toLowerCase());
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          {/* <!-- Content Upcoming Movies --> */}
          <div className="d-flex justify-content-around mt-4 content">
            {/* movie founds */}
            {resultUpComing
              .filter((item) => item.showingMonth === selectedMonth)
              .slice(0, 5)
              .map((item) => (
                <MovieComp
                  poster={item.poster}
                  title={item.tittle}
                  genres={item.genres}
                />
              ))}
          </div>
          {/* movie not found */}
          {resultUpComing.filter((item) => item.showingMonth === selectedMonth)
            .length === 0 ? (
            <p className="text-center" style={{ fontSize: "20px" }}>
              Movie Not Found
            </p>
          ) : null}
        </div>
      </section>
      {/* <!-- End Upcoming Movies --> */}
      {/* <!-- Start CTA --> */}
      <section id="cta">
        <div className="container">
          <h3 className="text-muted text-center">Be the vanguard of the</h3>
          <h2 className="text-primary text-center cta-mobile">Moviegoers</h2>
        </div>
        <div className="d-flex gap-2 justify-content-center mt-4 mb-4 form-mobile">
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Type your email"
            style={{ width: "300px" }}
          />
          <button className="btn btn-primary btn-mobile">Join Now</button>
        </div>
        <p className="text-center" style={{ color: "#6E7191" }}>
          By joining you as a Tickitz member, <br />
          we will always send you the latest updates via email .
        </p>
      </section>
      {/* <!-- End CTA --> */}
      <Footer />
    </div>
  );
}

export default Home;
