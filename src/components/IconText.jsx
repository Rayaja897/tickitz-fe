import React from 'react'

function IconText(props) {
    const { icon, text } = props;

    return (
        <div className="d-flex gap-2 align-items-center justify-content-center-mobile">
            <img className="mb-2" src={icon} alt="icon" />
            <p>{text}</p>
        </div>
    )
}

export default IconText
