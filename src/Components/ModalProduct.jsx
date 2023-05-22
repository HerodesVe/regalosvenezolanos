import "./ModalProduct.css";
import productIMG from "../assets/item-1.jpg";
import { useContext, useState } from "react";
import CarritoContext from "../context/CarritoContext";


const details = {
  material: "Algodón",
  peso: "1 kg",
  decoracion: "Sí",
  envoltura: "Si"
};

const ModalProduct = ({ product, onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const data = useContext(CarritoContext)
  const { handleClickCarrito, dolar } = data



  const handleModaleContainerClick = (e) => {
    e.stopPropagation();
  };

  const closeModal = () => {
    setIsOpen(false);
    onClose();
  };

  let { nombre, etiqueta, id_interno, precio } = product;

  return (
    <article className={`modal ${isOpen && `is-open`}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModaleContainerClick}>
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        <div className="modal__card">


          <div className="product__img">
            <img src={productIMG} alt={nombre} />
          </div>
          <div className="description__product__modal">
            <div className="modal__product__title">
              <h4>{nombre}</h4>
              <p className="modal__label">{etiqueta}</p>
            </div>
            <div className="description__modal__product">
              <h5 className="description__product__title">Descripción:</h5>
              <p className="description__product__text"> 
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt a quisquam autem repudiandae cum eum. Eveniet deleniti
                sunt labore quo cum, unde autem.
              </p>
            </div>

            <div className="details__modal__product">
              <h5 className="description__product__title details__title">Detalles del Producto</h5>
              <div className="product__details">

                <div className="product__details__row">
                  <span className="product__details__label">Material:</span>
                  <span className="product__details__value">{details.material}</span>
                </div>
                <div className="product__details__row">
                  <span className="product__details__label">Decoración:</span>
                  <span className="product__details__value">{details.decoracion}</span>
                </div>
                <div className="product__details__row">
                  <span className="product__details__label">Envoltura:</span>
                  <span className="product__details__value">{details.envoltura}</span>
                </div>
              </div>
            </div>
            
            <div className="info__buy__modal">
              <div className="buttons__container__modal__buttons">
                <button className="button__modal carrito" onClick={() => handleClickCarrito(product)}>Añadir al Carrito</button>
              </div>
              <div className="prices__container">
                <p className="price__product__modal">{` US$ ${precio}`}</p>
                <p className="price__product__modal price-bolivar">{dolar && `Bs ${(precio * dolar).toFixed(1)}`}</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </article>
  );
};

export default ModalProduct;