import React from 'react'

function Navbar() {
    return (
        <>
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
        </>
    )
}

export default Navbar