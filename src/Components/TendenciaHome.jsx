import React, { useEffect, useRef } from 'react';
import Glider from 'glider-js/glider.min.js';
import 'glider-js/glider.min.css';
import img from "../assets/item-1.jpg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./TendenciaHome.css"


function TendeciaHome() {
  const gliderRef = useRef(null);

  useEffect(() => {
    new Glider(gliderRef.current, {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carrusel__indicadores',
        arrows: {
          prev: '.carrusel__anterior',
          next: '.carrusel__siguiente'
        },
        responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 550,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          }
        ]
      });
  }, []);

  return (
    <div className="carrusel">
        <h3 className='carrusel__title'>Tendencias</h3>
        <div className="carrusel__contenedor">
            <button aria-label='Anterior' className='carrusel__anterior'>
                <ArrowBackIosIcon />
            </button>
                <div className='carrusel__lista' ref={gliderRef}>
                    <img className='carrusel__item' src={img} alt="Image 1" />
                    <img className='carrusel__item' src={img} alt="Image 1" />
                    <img className='carrusel__item' src={img} alt="Image 1" />
                    <img className='carrusel__item' src={img} alt="Image 1" />
                    <img className='carrusel__item' src={img} alt="Image 1" />
                    <img className='carrusel__item' src={img} alt="Image 1" />
                    <img className='carrusel__item' src={img} alt="Image 1" />
                    <img className='carrusel__item' src={img} alt="Image 1" />
                    <img className='carrusel__item' src={img} alt="Image 1" />
                </div>

            <button aria-label='Siguiente' className='carrusel__siguiente'>
                <ArrowForwardIosIcon />
            </button>
            <div role='tablist' className="carrusel__indicadores"></div>
        </div>
    </div>
  );
}

export default TendeciaHome