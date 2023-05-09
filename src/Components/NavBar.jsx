import logo from "../assets/logo-png.png"
import { NavLink} from "react-router-dom";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useRef, useState } from "react";
import CarritoCompras from "./Carrito";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {
  const [carritoVisible, setCarritoVisible] = useState(false);

  const navRef = useRef()


  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  return (
    <div className="header">
      <div className="nav__img">
        <img src={logo} alt="Regalos Venezolanos"/>
      </div>
      <nav ref={navRef} className="nav">
          <NavLink to="/" className={({isActive})=>{ return isActive ? `is-active` : undefined}}>Home</NavLink>
          <NavLink to="/nosotros" className={({isActive})=>{ return isActive ? `is-active` : undefined}}>Nosotros</NavLink>
          <NavLink to="/categorias" className={({isActive})=>{ return isActive ? `is-active` : undefined}}>Categorias</NavLink>
          <NavLink to="/contacto" className={({isActive})=>{ return isActive ? `is-active` : undefined}}>Contacto</NavLink>
          <a href=""><WhatsAppIcon className="whatsapp__logo" /></a>
          <button onClick={showNavbar} className="nav-btn">
            <CloseIcon />
          </button>
      </nav>
      <button onClick={showNavbar} className="nav-btn close-nav">
        <MenuIcon />
      </button>

    </div>
  );
}

export default NavBar;