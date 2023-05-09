import React from "react";
import "./CardProducto.css";
import imgRoute from "../assets/item-1.jpg";

const CardProducto = ({ el, handleCardClick }) => {
  const { name, etiqueta, id, price} = el;

  return (
    <div key={id} className="product__card" onClick={() => handleCardClick(el)}>
      <img src={imgRoute} alt={name} />
      <div className="info__card">
        <h3 className="card__title">{name}</h3>
        <p className="description__card">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          in voluptatem cumque
        </p>
        <div className="labels">
          <p className="label__card">{etiqueta}</p>
          <p className="price">{`$${price}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;