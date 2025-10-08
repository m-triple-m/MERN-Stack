import React from 'react';
import './Card.css';

const Card = ({ imgUrl, cardTitle, cardDesc, cardBtn="Shop Now" }) => {
    return (
        <div className='card'>
            <img className='card-img' src={imgUrl} alt="" />
            <div className='card-body'>
                <h1 className='card-title'>{cardTitle}</h1>
                <p className='card-desc'>{cardDesc}</p>
                <button className='card-btn'>{cardBtn}</button>
            </div>
        </div>
    )
}

export default Card;