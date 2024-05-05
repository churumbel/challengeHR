import React, { useState } from "react";
import "../estilos/Carrousel.css";

const Carrousel = ({ items }) => {
  //currentIndex es el estado actual del carrousel
  const [currentIndex, setCurrentIndex] = useState(0);

  //Con dos funciones se pasan las imágenes del Carrousel
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      {items.map((item, index) => (
        <div
          className={index === currentIndex ? "slide active" : "slide"}
          key={index}
        >
          <div className="contentCarrousel">
            <img src={item.imageUrl} alt={item.title} className="image" />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button className="buttoncarrousel" onClick={item.onClickHandler}>
              {item.buttonText}
            </button>
          </div>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>
        {/* símbolo de flecha izquierda */}
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        {/* símbolo de flecha derecha */}
        &#10095;
      </button>
    </div>
  );
};

export default Carrousel;
