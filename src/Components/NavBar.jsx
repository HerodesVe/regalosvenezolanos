import logo from "../assets/logo-png.png";
import { NavLink, useLocation } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  const navRef = useRef();
  const location = useLocation();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div className="header">
      <div className="nav__img">
        <img src={logo} alt="Regalos Venezolanos" />
      </div>
      <nav ref={navRef} className="nav">
        <HashLink
          to="/#"
          className={`nav-link ${
            location.pathname === "/" && location.hash === "" ? "nav-active" : ""
          }`}
        >
          Inicio
        </HashLink>
        <NavLink
          to="/nosotros"
          className={({ isActive }) => {
            return isActive ? `nav-active` : undefined;
          }}
        >
          Nosotros
        </NavLink>
        <NavLink
          to="/categorias"
          className={({ isActive }) => {
            return isActive ? `nav-active` : undefined;
          }}
        >
          Categorias
        </NavLink>
        <HashLink
          to="/#contacto"
          className={`nav-link ${
            location.hash === "#contacto" ? "nav-active" : ""
          }`}
        >
          Contacto
        </HashLink>
        <a href="">
          <WhatsAppIcon className="whatsapp__logo" />
        </a>
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