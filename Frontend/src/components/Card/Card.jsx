import React from 'react'
import './Card.css'

function Card(props) {
    return (
        <div className='card-all'>
            <div>
                <img
                    className='card-img'
                    src={props.src}
                    alt="yoo" />
            </div>
            <div className='card-head-con'>
                <h3 className='card-heading'>{props.heading}</h3>
                <p className='card-content'>{props.text}</p>
            </div>
        </div>
    );
}

export default Card