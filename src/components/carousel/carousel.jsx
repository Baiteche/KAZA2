import React, { useState } from 'react';
import './carousel.css';

export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className="carousel">
      <div className="slide-container">
        {images.map((image, index) => (
          <img
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            src={image} alt='slider-pic'
          />
        ))}
      </div>
      <button className="prev-button" onClick={handlePrevSlide}>
      
      </button>
      <button className="next-button" onClick={handleNextSlide}>
        
      </button>
    </div>
  );
}
