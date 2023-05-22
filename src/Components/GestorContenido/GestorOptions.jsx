import AddIcon from '@mui/icons-material/Add';
import { useContext } from 'react';
import GestorContext from '../../context/GestorContext';
import VisibilityIcon from '@mui/icons-material/Visibility';

function GestorOptions({openModal, setSearch, setValueSearch, valueSearch, openModalAdd}) {
  const data = useContext( GestorContext )

  const handleSearch = ({ target }) => {
    setSearch( target.value )
  }

  const handleValueSearch = ({ target }) => {
    setValueSearch( target.value )
  }

  
  return (
    <div className="gestor__options">
      <div className="button__container__gestor">
        <button onClick={openModal} className='add__product__gestor__options'><AddIcon/>Agregar</button>
        <button onClick={openModalAdd} className='view-products'><VisibilityIcon/> <p>Home</p></button>
      </div>
    
      <div className="inputs__gestor__options">
        <input onChange={handleSearch} className='search__gestor__options' type="text" placeholder={`Buscar por ${valueSearch.toUpperCase()}`} name="search-gestor" />
        <select className='select__gestor__options' name="" onChange={ handleValueSearch }>
          <option value="id_interno">ID</option>
          <option value="nombre">Nombre</option>
          <option value="etiqueta">Etiqueta</option>
        </select>
      </div>
    </div>
  );
}

export default GestorOptions;