import React from 'react'

function Movie() {
    return (
        <div className="image-poster">
            <img src="/images/poster/Spiderman.jpg" alt="poster" />
            <h4 className="text-center mt-3">Spider-Man</h4>
            <span className="text-muted text-center text text-muted-mobile" style={{ fontSize: "16px" }}>
                Action, Drama, Sci-Fi</span>
            <div className="d-grid mt-2">
                <button className="btn btn-outline-primary">Details</button>
            </div>
        </div>
    )
}

export default Movie
