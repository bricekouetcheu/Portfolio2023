import { useState } from "react";

const Modal_test = ({ slides,description,onClose}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="modal-className">
         <div className="slider">
            <div>
                 <div onClick={goToPrevious}  className="leftArrow">
                    ❰
                 </div>
                 <div onClick={goToNext} className="rightArrow">
                    ❱
                 </div>
            </div>
            <img className="slideWithBackground" src={slides[currentIndex].url} alt="" />
          
                <div  className="dotsContainer">
                    {slides.map((slide, slideIndex) => (
                <div
                className="dotStyle"
                 key={slideIndex}
                 onClick={() => goToSlide(slideIndex)}
                >
                ●
                 </div>
                 ))}
     


            </div>

            <div className="Modal-description">
                <p>csbcuviocuie</p>
                <button onClick={onClose}> FERMER</button>
            </div>
         


    </div>


    </div>
   
  );
};

export default Modal_test;