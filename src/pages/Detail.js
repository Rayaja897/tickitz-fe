import "../style/Detail.css";

import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Detail() {
  const { slug } = useParams();
  const [detailMovie, setDetailMovie] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      axios
        .get("http://localhost:3000/api/movie.json")
        .then((response) => {
          if (response.status === 200) {
            setDetailMovie(
              response.data.find(
                (item) =>
                  item.tittle.toLowerCase().split(" ").join("-") === slug
              )
            );
          }
        })
        .catch((error) => console.log(`error : ${error}`));
    }, 2000);
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
              style={{ height: "90vh", flexDirection: "column" }}
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
      {/* start of footer */}
      <Footer />
    </div>
  );
}

export default Detail;
