import './style/App.css';
import './style/App.mobile.css';
import MovieComp from './components/Movie'
import IconText from './components/IconText';
import React from 'react';
import axios from 'axios';

function App() {
    const date = new Date();
    const month = date.toLocaleDateString("default", { month: "short"});

    const [result, setResult] = React.useState([]);
    const [selectedMonth, setSelectedMonth] = React.useState(month.toLowerCase())

    React.useEffect(() => {
        axios.get("http://localhost:3000/api/movie.json")
            .then((response) => {
                if (response.status === 200) {
                    setResult(response.data);
                }
            })
            .catch((error) => console.log(`error : ${error}`));
    }, []);
    return (
        <div className="App">
            {/* <!-- Start Header --> */}
            <header className="container pt-3">
                {/* <!-- Start Navbar --> */}
                <nav className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center gap-4">
                        <img className="logo" src="/images/Logo.png" alt="logo" />
                        <a className="d-desktop" href="/">Home</a>
                        <a className="d-desktop" href="/">List Movie</a>
                    </div>
                    <button className="btn btn-primary px-4 d-desktop">Sign Up</button>
                    {/* <!-- Navbar Mobile --> */}
                    <button className="navbar-toggler d-mobile" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img src="/images/HambMenu.png" alt="menu" />
                    </button>
                </nav>
                <div className="collapse navbar-collapse mt-4" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item d-flex justify-content-center mt-4">
                            <a href="/">Home</a>
                        </li>
                        <li className="nav-item d-flex justify-content-center mt-4">
                            <a href="/">List Movie</a>
                        </li>
                        <li className="nav-item d-flex justify-content-center mt-4">
                            <button className="btn btn-primary px-4">Sign Up</button>
                        </li>
                    </ul>
                </div>
                {/* <!-- End Navbar --> */}
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
                        <a className="text-primary" href="/#">View All</a>
                    </div>
                    {/* <!-- Content Now Showing for desktop--> */}
                    <div className="d-flex justify-content-around mt-5 content">
                        {result
                        .filter((item) => item.isShowing === true)
                        .slice(0, 5)
                        .map((item) =>
                            <MovieComp
                                poster={item.poster}
                                title={item.tittle}
                                genres={item.genres}
                            />
                        )}
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
                        <a className="text-primary" href="/#">View All</a>
                    </div>
                    {/* <!-- Months List --> */}
                    <div className="absolute-mobile">
                        <div className="d-flex mt-4 month-view Months-scroll">
                            {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((item) => (
                                <button className={selectedMonth === item.toLowerCase()
                                    ? "btn btn-primary px-4"
                                    : "btn btn-outline-primary px-4"
                                } onClick={() =>{
                                    setSelectedMonth(item.toLowerCase())
                                }}
                                >{item}</button>
                            ))}
                        </div>
                    </div>
                    {/* <!-- Content Upcoming Movies --> */}
                    <div className="d-flex justify-content-around mt-4 content">
                    {/* movie founds */}
                    {result
                        .filter((item) => item.isShowing === false)
                        .filter((item) => item.showingMonth === selectedMonth)
                        .slice(0, 5) 
                        .map((item) =>
                            <MovieComp
                                poster={item.poster}
                                title={item.tittle}
                                genres={item.genres}
                            />
                        )}
                    </div>
                    {/* movie not found */}
                    {result
                        .filter((item) => item.isShowing === false)
                        .filter((item) => item.showingMonth === selectedMonth).length ===
                        0 ? (
                            <p className="text-center" style={{fontSize: '20px'}}>Movie Not Found</p>
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
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Type your email" style={{ width: "300px" }} />
                    <button className="btn btn-primary btn-mobile">Join Now</button>
                </div>
                <p className="text-center" style={{ color: "#6E7191" }}>By joining you as a Tickitz member, <br />
                    we will always send you the latest updates via email .</p>
            </section>
            {/* <!-- End CTA --> */}
            {/* <!-- Start Footer --> */}
            <footer className="container pb-3 pt-5">
                <div className="row">
                    <div className="col-sm-3 col-xs-12">
                        <div className="d-flex justify-content-center-mobile">
                            <img className="mb-3" src="/images/Logo.png" alt="Logo" />
                        </div>
                        <p className="text-center-mobile">Stop waiting in line. Buy tickets <br />
                            conveniently, watch movies quietly.</p>
                    </div>
                    <div className="mt-3 col-sm-3 col-xs-12">
                        <h6 className="mb-4 text-center-mobile">Explore</h6>
                        <a className="text-center-mobile" style={{ display: "block", fontWeight: "350" }} href="/#">Home</a>
                        <a className="text-center-mobile" style={{ display: "block", fontWeight: "350" }} href="/#">List Movie</a>
                    </div>
                    <div className="col-sm-3 col-xs-12">
                        <h6 className="mt-3 mb-4 text-center-mobile">Our Sponsor</h6>
                        <div className="d-flex justify-content-center-mobile">
                            <img className="mb-3" style={{ display: "block" }} src="/images/cinemas/ebv.id 2.jpg" alt="sponsor" />
                        </div>
                        <div className="d-flex justify-content-center-mobile">
                            <img className="mb-3" style={{ display: "block" }} src="/images/cinemas/CineOne21 2.jpg" alt="sponsor" />
                        </div>
                        <div className="d-flex justify-content-center-mobile">
                            <img className="mb-3" style={{ display: "block" }} src="/images/cinemas/hiflix 2.jpg" alt="sponsor" />
                        </div>
                    </div>
                    <div className="mt-3 col-sm-3 col-xs-12">
                        <h6 className="mb-4 text-center-mobile">Follow Us</h6>
                        <IconText />
                        <IconText />
                        <IconText />
                        <IconText />
                    </div>
                </div>
                <p className="text-center mt-4 mb-2">© 2020 Tickitz. All Rights Reserved.</p>
            </footer>
            {/* <!-- End Footer --> */}
        </div>
    )
}

export default App;
