import { useContext, useEffect, useState } from "react"
import CardProducto from "./CardProducto"
import ModalProduct from "./ModalProduct"
import { Link } from "react-router-dom"
import {helpHttp} from "../helpers/helpHttp"
import GestorContext from "../context/GestorContext"


const ProductHome = () => {
  const [showModal, setShowModal] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)


  const data = useContext(GestorContext)
  const {dbTrends} = data

  const filteredProducts = dbTrends.slice(0,6)

  useEffect(() =>{
    setShowModal(filteredProducts)
  },[dbTrends])

  const handleCardClick = (product) =>{
    setSelectedProduct(product)
    setShowModal(true)
  } 


  return (
    <div className="card__container__home">
      <h2 className="title__products__trends">Productos Destacados</h2>
      <div className="card__container__home2">
        {filteredProducts.length > 0 && filteredProducts.map((el) => <CardProducto handleCardClick={handleCardClick} key={el.id} el={el}/>)}
      </div>
      {showModal && selectedProduct && (
        <ModalProduct
          product={selectedProduct}
          onClose={() => {
            setSelectedProduct(null)
            setShowModal(false)
          }}
        />
      )}
      
      <div className="button__container__product__home">
        <Link className="product__home__button" to={"/categorias"}>Ver más</Link>
      </div>
    </div>
  )
}

export default ProductHome