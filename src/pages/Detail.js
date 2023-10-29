import "../style/Detail.css";
import "../style/Detail.mobile.css";

import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Detail() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [detailMovie, setDetailMovie] = React.useState(null);
  const [listCinemas, setListCinemas] = React.useState([]);

  //lifecycle
  const handleGetApi = async () => {
    try {
      // detail movie
      const requestDetail = await axios.get(
        `https://tickitz-be.onrender.com/rayhan/movie/detail/${slug}`
      );

      if (requestDetail.data.data.length > 0) {
        // get data from response api and access response array index 0
        setDetailMovie(requestDetail.data.data[0]);
      }

      // Detail Cinemas
      const requestCinema = await axios.get(
        `https://tickitz-be.onrender.com/rayhan/movie/${slug}/cinemas`
      );

      if (requestCinema.data.data.length > 0) {
        setListCinemas(requestCinema.data.data);
      }
    } catch (error) {
      console.log(`error : ${error}`);
    }
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
    handleGetApi();
  }, []);

  return (
    <div id="detail_page">
      <header className="container pt-4 mb-5">
        {/* start of navbar */}
        <Navbar />

        {detailMovie === null ? (
          <>
            {/* loading */}
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "70vh", flexDirection: "column" }}
            >
              <div className="spinner-border mb-2" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="text-center">Loading...</p>
            </div>
          </>
        ) : null}

        {detailMovie !== null ? (
          <>
            {/* start of content */}
            <section id="header_content" className="mt-6">
              <div className="row">
                <div className="col col-md-4 col-xs-12">
                  <div className="border-img">
                    <img
                      src={detailMovie.poster}
                      alt="poster"
                      width="100%"
                    ></img>
                  </div>
                </div>
                <div className="col col-md-8 col-xs-12 main_content">
                  <h1>{detailMovie.tittle}</h1>
                  <p className="genres">
                    {detailMovie.genres.map((item, key) => (
                      <span>
                        {detailMovie.genres.length - 1 === key
                          ? item
                          : `${item}, `}
                      </span>
                    ))}
                  </p>
                  <div className="row mt-4">
                    <div className="col col-md-4">
                      {/* release date */}
                      <div>
                        <p
                          className="text-muted"
                          style={{ fontSize: "14px", marginBottom: 0 }}
                        >
                          Release Date
                        </p>
                        <p>{detailMovie.release}</p>
                      </div>

                      {/* duration */}
                      <div>
                        <p
                          className="text-muted"
                          style={{ fontSize: "14px", marginBottom: 0 }}
                        >
                          Duration
                        </p>
                        <p>{detailMovie.duration}</p>
                      </div>
                    </div>
                    <div className="col col-md-8">
                      {/* Directed by */}
                      <div>
                        <p
                          className="text-muted"
                          style={{ fontSize: "14px", marginBottom: 0 }}
                        >
                          Directed by
                        </p>
                        <p>{detailMovie.director}</p>
                      </div>

                      {/* Casts */}
                      <div>
                        <p
                          className="text-muted"
                          style={{ fontSize: "14px", marginBottom: 0 }}
                        >
                          Casts
                        </p>
                        <p>
                          {detailMovie.cast.map((item, key) => (
                            <span>
                              {detailMovie.cast.length - 1 === key
                                ? item
                                : `${item}, `}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr />
                  {/* synopsis */}
                  <h5>Synopsis</h5>
                  <p
                    className="mt-2"
                    style={{ color: "#4E4B66", fontSize: "16px" }}
                  >
                    {detailMovie.desc}
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : null}
      </header>
      {/* start of cinemas */}
      <section className="container mt-5" id="cinemas">
        <h2 className="text-center" style={{ fontSize: "24px" }}>
          Showtimes and Tickets
        </h2>
        <div className="row mt-5">
          {listCinemas.map((item) => (
            <div className="col col-md-4">
              <div className="card_cinemas">
                {/* head content */}
                <div className="card_header">
                  <img src={item.logo} alt={item.name} />
                  <div>
                    <h4 style={{ fontSize: "23px" }}>{item.name}</h4>
                    <p style={{ height: "45px" }}>{item.address}</p>
                  </div>
                </div>
                <hr />
                {/* Bottom Content */}
                <div className="card_bottom">
                  {item.movieStart.map((nestedItem) => (
                    <p>{nestedItem} WIB</p>
                  ))}
                </div>
                <div className="card_price">
                  <p style={{ fontSize: "16px", color: "#6B6B6B" }}>Price</p>
                  <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                    Rp {item.priceDisplay}/seat
                  </p>
                </div>
                <div
                  className="d-grid"
                  style={{ padding: "0px 30px 30px 30px" }}
                >
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      navigate(`/choose-seat/${slug}`);
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* start of footer */}
      <Footer />
    </div>
  );
}

export default Detail;
