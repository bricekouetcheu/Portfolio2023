import React from 'react';

const Card = (props) => {
    return (
        <div className=' card'>
            <img src={props.img} alt="" />
            <div className='card-description '>
                <span>{props.description}</span>
                <span>{props.hours}</span>
            </div>
            <p>{props.title}</p>
            
        </div>
    );
};

export default Card;