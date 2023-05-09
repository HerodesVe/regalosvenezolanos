import { useContext } from "react";
import "./Carrito.css"
import CarritoContext from "../context/CarritoContext";
import CarritoCard from "./CarritoCard";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function CarritoCompras({handleCarritoClick}) {
  const data = useContext(CarritoContext)
  const {itemsCart, total, dolar} = data

  const handleSubmit = () => {

  }

  return (
    
      <div className="carrito__container">
        
        <div className="product__carrito__container">

          <div className="header__carrito__container">
            <h2 className="products__carrito__title">Productos</h2>
            <p>Articulos: {itemsCart.length > 0 && itemsCart.length}</p>
          </div>

          <div className="container__products__carrito">
            {itemsCart.length > 0 && itemsCart.map((item, index) => <CarritoCard key={index} data={item} />)}
          </div>

          <div className="back-to-shop">
            <button className="back-to-shop-button" onClick={handleCarritoClick}> <ArrowBackIcon sx={{ fontSize: 20 }} /> Atrás</button>
          </div>
        </div>

        <div className="personalization__container">
          <h2 className="details__carrito__title">Detalles</h2>

          <form onSubmit={handleSubmit} className="form__carrito">

            <div className="inputs__carrito__container">
              <input type="text" placeholder="Nombre" name="name" className="input__carrito name-input"/>
              <input type="text" name="email" placeholder="Correo Electronico" className="input__carrito"/>
            </div>
          
            <textarea placeholder="Detalles de la compra" name="textarea" id="" cols="30" rows="10" className="textarea__carrito"></textarea>

            <div className="total__price___carrito">
              <div className="total__carrito">
                PRECIO TOTAL:
              </div> 
              <div className="total__carrito__precio">
                <p>US$ {total}</p>
                <p>BS {(dolar * total).toFixed(2)}</p>
              </div>

            </div>

            <input type="submit" className="submit__carrito" />
          </form>

        </div>

      </div>
    
   );
}

export default CarritoCompras;