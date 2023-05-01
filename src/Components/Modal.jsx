import React, { useState } from 'react';

const Modal = ({ images, description,onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousImage = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal-className">
      <div className="modal-content">
        <img src={images[currentIndex]} alt="" />
        <button className="modal-button modal-button-left" onClick={previousImage}>
          Précédent
        </button>
        <button className="modal-button modal-button-right" onClick={nextImage}>
          Suivant
        </button>
      </div>
      <div className='description'>
        <p>{description}</p>
      </div>
      <button className="modal-close-button" onClick={onClose}>
        Fermer
      </button>
    </div>
  );
};

export default Modal;