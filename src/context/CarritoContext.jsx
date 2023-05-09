import { createContext, useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const CarritoContext = createContext()

const initialCart = []

const CarritoProvider = ({children}) => {
  const [itemsCart, setitemsCart] = useState(initialCart);
  const [total, setTotal] = useState(0)
  const [dolar, setDolar] = useState(null);

  useEffect(()=>{

    let totalPrice = 0

    itemsCart.map( el =>{

      totalPrice = totalPrice + Number(el.price)
    })

    setTotal(totalPrice)

  },[itemsCart])

  const url = "https://api.exchangedyn.com/markets/quotes/usdves/bcv?fbclid=IwAR3_QQNUMb6bUfGohhZdOMSBELTndbr6475I2Tnd7jFZUWJwwrctN0j-Cfg"

  useEffect(()=> {
    helpHttp()
      .get(url)
        .then(res =>{
          const priceDolar = res.sources.BCV.quote
          const numberDolar = Number(priceDolar).toFixed(2)

          setDolar(Number(numberDolar))

        })
  },[url])

  const handleClickCarrito = (product) => {

    setitemsCart([...itemsCart, product]);

  }

  const deleteProduct = (id) => {
    const index = itemsCart.findIndex(item => item.id === id);
    if (index !== -1) {
      itemsCart.splice(index, 1);
      setitemsCart([...itemsCart]);
    }
  }

  const data = {itemsCart, handleClickCarrito,deleteProduct, total, dolar}

  return(
    <CarritoContext.Provider value={data}>
      {children}
    </CarritoContext.Provider>
  )
}

export default CarritoContext
export {CarritoProvider}