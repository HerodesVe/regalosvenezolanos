import { useContext } from "react";
import CarritoContext from "../context/CarritoContext";
import img from "../assets/item-1.jpg"
import CloseIcon from '@mui/icons-material/Close';

function CarritoCard({data}) {
  const {name, id, price} = data
  const {dolar} = useContext(CarritoContext)

  let newPrice = Number(price)
  

  const {deleteProduct} = useContext(CarritoContext) 
  

  return (
    <div className="card__container__carrito">


      <div className="img__card__carrito">
        <img src={img} alt="" />
      </div>

     
      <div className="header__titles__carrito__card">
        <h3 className="main__title__carrito">{name}</h3>
        <p className="product__code">{`Codigo del Producto: ${id}`}</p>
      </div>

      <div className="contaniner__price__card__carrito">
        <h4 className="price__carrito__dolar">US$ {price}.00</h4>
        <p className="price__carrito__bolivares">{`BS ${(newPrice * dolar).toFixed(2)}`}</p>
      </div>

      <button className="close__icon__carrito__card" onClick={() => deleteProduct (id)}> <CloseIcon /> 
      </button>
    
    </div>
  );
}

export default CarritoCard;