import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./NavGestor.css"

function NavGestor() {
  return (
    <div className="nav-gestor">
      <ul className='list__nav__gestor'>
        <MenuIcon />
      </ul>
      <ul className='list__nav__gestor li__gestor'>
        <li><p>Base de Datos</p></li>
        <li><p>Regalos Venezolanos Dashboard</p></li>
      </ul>
      <ul className='list__nav__gestor'>
        <AccountCircleIcon />
      </ul>
    </div>
  );
}

export default NavGestor;