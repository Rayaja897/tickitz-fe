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
  const [dateMovie, setDateMovie] = React.useState(null);
  const [timeMovie, setTimeMovie] = React.useState(null);

  // lifecycle
  const handleGetApi = async () => {
    try {
      // Detail Movie
      const requestDetail = await axios.get(
        `https://tickitz-be.onrender.com/rayhan/movie/detail/${slug}`
      );

      if (requestDetail.data.data.length > 0) {
        // get data from response api and access response array index 0
        setDetailMovie(requestDetail.data.data[0]);
      }

      // Detail Cinema
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
    handleGetApi();
  }, []);

  return (
    <div id="detail_page">
      <header className="container pt-4 mb-5">
        {/* Start of Navbar */}
        <Navbar />

        {/* Loading */}
        {detailMovie === null ? (
          <>
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

        {/* Start Of Contet */}
        {detailMovie !== null ? (
          <section id="header_content" className="mt-10">
            <div className="row">
              <div className="col col-md-4 col-xs-12">
                <div className="border-image">
                  <img src={detailMovie.poster} width="100%" alt="poster" />
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

                <div className="row mt-5">
                  <div className="col col-md-4">
                    {/* Release date */}
                    <div>
                      <p
                        className="text-muted"
                        style={{ fontSize: "14px", marginBottom: 0 }}
                      >
                        Release date
                      </p>
                      <p>{detailMovie.release}</p>
                    </div>

                    {/* Duration */}
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
                      <p style={{ textTransform: "capitalize" }}>
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

                {/* Synopsis */}
                <h5>Synopsis</h5>
                <p
                  className="mt-3"
                  style={{ color: "#4E4B66", fontSize: "16px" }}
                >
                  {detailMovie.desc}
                </p>
              </div>
            </div>
          </section>
        ) : null}
        {/* End Of Content */}
      </header>

      {/* Start of Cinemas */}
      {detailMovie !== null ? (
        <section className="container mt-5" id="cinemas">
          <h2 className="text-center" style={{ fontSize: "24px" }}>
            Showtimes and Tickets
          </h2>
          <div className="d-flex gap-3 justify-content-center mt-3">
            <div style={{ width: "260px" }}>
              <input
                type="date"
                className="form-control"
                onChange={(e) => setDateMovie(e.target.value)}
              />
            </div>
            <select
              className="form-select form-select-sm"
              onChange={(e) => setTimeMovie(e.target.value)}
              style={{ width: "260px" }}
            >
              <option selected>Select time</option>
              <option value="10:00">10:00 WIB</option>
              <option value="13:00">13:00 WIB</option>
              <option value="16:00">16:00 WIB</option>
              <option value="19:00">19:00 WIB</option>
            </select>
          </div>
          <div className="row mt-5">
            {listCinemas.map((item) => (
              <div className="col col-md-4">
                <div className="card_cinemas">
                  {/* head content */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      gap: "40px",
                      padding: "30px 30px 0px 30px",
                    }}
                  >
                    <img
                      src={item.logo}
                      width="140px"
                      height="50px"
                      alt={item.name}
                      style={{ objectFit: "contain" }}
                    />

                    <div>
                      <h4>{item.name}</h4>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#6E7191",
                          margin: 0,
                        }}
                      >
                        {item.address}
                      </p>
                    </div>
                  </div>
                  <hr />
                  {/* bottom content */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "40px",
                      padding: "0px 30px 20px 30px",
                    }}
                  >
                    {item.movieStart.map((nestedItem) => (
                      <p style={{ color: "#4E4B66", fontSize: "12px" }}>
                        {nestedItem} WIB
                      </p>
                    ))}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0px 30px 0px 30px",
                    }}
                  >
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
                      className={
                        dateMovie && timeMovie
                          ? "btn btn-primary"
                          : "btn btn-secondary"
                      }
                      onClick={() => {
                        if (dateMovie && timeMovie)
                          navigate(`/choose-seat/${slug}`, {
                            state: {
                              dateMovie,
                              timeMovie,
                              cinemaId: item.id,
                              movieTitle: detailMovie.tittle,
                              priceDisplay: item.priceDisplay,
                              price: item.price,
                              cinemaName: item.name,
                              cinemaLogo: item.logo,
                            },
                          });
                      }}
                      disabled={!dateMovie || !timeMovie}
                    >
                      Book now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {/* End of Cinemas */}

      {/* Start of Footer */}
      <div style={{ marginBottom: "-100vh !important" }}>
        <Footer />
      </div>
    </div>
  );
}

export default Detail;