import React from 'react';
import javascript from '../assets/javascript.png'
import { useState } from 'react';
import Modal from './Modal';
import Modal_test from './Modal_test';
import python from '../assets/python.png'
import node from '../assets/node-express-mongo.png'
import devops from '../assets/devops.jpg'

const Card = (props , images) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const slides = [
        { url: javascript, title: "beach" },
        { url: python, title: "boat" },
       
      ];


    
    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    

    return (
        <>

               {isModalOpen && (
        // eslint-disable-next-line react/jsx-pascal-case
        <Modal_test slides={slides} onClose={handleCloseModal} />
      )}
         <div className='card'>
            <img src= {props.img} alt=""/>
            <div className='card-description '>
                <span>{props.description} bonjour</span>
                <span>{props.hours} 50H</span>
            </div>
            <h3  onClick={handleOpenModal}>{props.title}</h3>
       
        </div>
        </>
 
    );
};

export default Card;