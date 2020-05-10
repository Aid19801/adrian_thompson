import React from 'react';
import './styles.css';

const Title = ({ text }) => {

    return (
        <div className="title__container">
            <h1>{text}</h1>
            <div className="dots__container">
                <span></span>
            </div>
        </div>
    )
}

export default Title;