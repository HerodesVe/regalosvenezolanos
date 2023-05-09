import { createContext, useEffect, useState } from "react";
import {helpHttp} from "../helpers/helpHttp"

const ProductsContext = createContext()

const ProductsProvider = ({children}) =>{
  const [tendentProducts, setTendentProducts] = useState([]);
  const [productsAll, setProductsAll] = useState([]);

  const urlProductsAll = "http://localhost:5000/allProducts"
 


  const data = {productsAll,tendentProducts,setTendentProducts, setProductsAll}

  return(
    <ProductsContext.Provider value={data}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
export {ProductsProvider}