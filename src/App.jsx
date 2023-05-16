import './App.css'
import NavBar from './Components/NavBar'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from "./Components/Home"
import Footer from './Components/Footer';
import { CarritoProvider } from './context/CarritoContext';
import ContactoHome from './Components/ContactoHome';
import Categoria from './Components/Seccion Categoria/Categoria';
import GestorHome from './Components/GestorContenido/GestorHome';
import { GestorProvider } from './context/GestorContext';
import CarritoCompras from './Components/Carrito';
import { useState } from 'react';
import Carrito from '@mui/icons-material/ShoppingCartOutlined';
import { FilterProvider } from './context/FilterContext';


function App() {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const handleCarritoClick = () => {
    setCarritoVisible(!carritoVisible);
  };

  return (
    <div className="App">
      <GestorProvider> 
      <CarritoProvider>
      <FilterProvider>
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
              path="/#contacto"
              element={
                <>
                  <NavBar />
                  <Home />
                  <Footer />
                </>
              }
              />
              <Route path="/admin/*" element={<GestorHome />} />
          </Routes>
        </BrowserRouter>
      </FilterProvider>
      </CarritoProvider>
      </GestorProvider>
    </div>
  );
}

export default App;