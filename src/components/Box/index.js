import React from 'react';
import Icon from '../Icon';
import './styles.css';

function Box({ text, blurb, icon }) {

    return (
        <div className="box__container">
            <Icon icon={icon} />
            <div className="flex-col">
                <h4>{text}</h4>
                <p>{blurb}</p>
            </div>
        </div>
    )
}

export default Box;