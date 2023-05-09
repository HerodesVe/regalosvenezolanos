import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Components/Home"
import Footer from './Components/Footer';
import { CarritoProvider } from './context/CarritoContext';
import ContactoHome from './Components/ContactoHome';
import Categoria from './Components/Seccion Categoria/Categoria';
import GestorHome from './Components/GestorContenido/GestorHome';
import { ProductsProvider } from './context/ProductsContext';
import { GestorProvider } from './context/GestorContext';
import CarritoCompras from './Components/Carrito';
import { useState } from 'react';
import Carrito from '@mui/icons-material/ShoppingCartOutlined';


function App() {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const handleCarritoClick = () => {
    setCarritoVisible(!carritoVisible);
  };

  return (
    <div className="App">
      <GestorProvider> 
      <ProductsProvider>
      <CarritoProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <NavBar />
                  <div className="carrito__icon" onClick={handleCarritoClick}>
                    <Carrito className="carrito__icon__home" sx={{ fontSize: 50 }}/>
                  </div>
                  <div className={`carrito__popup ${carritoVisible ? 'visible' : ''}`}>
                    <CarritoCompras handleCarritoClick={handleCarritoClick}/>
                  </div>
                  <Home />
                  <Footer />
                </>
              }
            />
            <Route
              path="/categorias"
              element={
                <>
                  <NavBar />
                  <Categoria />
                  <Footer />
                </>
              }
            />
            <Route
              path="/contacto"
              element={
                <>
                  <NavBar />
                  <ContactoHome />
                  <Footer />
                </>
              }
            />
              <Route path="/admin/*" element={<GestorHome />} />
          </Routes>
        </BrowserRouter>
      </CarritoProvider>
      </ProductsProvider>
      </GestorProvider>
    </div>
  );
}

export default App;