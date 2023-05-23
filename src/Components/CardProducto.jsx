import React from "react";
import "./CardProducto.css";

const CardProducto = ({ el, handleCardClick }) => {
  const { nombre, etiqueta, id_interno, precio, img } = el;

  return (
    <div key={id_interno} className="product__card" onClick={() => handleCardClick(el)}>
      <img src={img} alt={nombre} />
      <div className="info__card">
        <h3 className="card__title">{nombre}</h3>
        <p className="description__card">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          in voluptatem cumque
        </p>
        <div className="labels">
          <p className="label__card">{etiqueta}</p>
          <p className="price">{`$${precio}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;