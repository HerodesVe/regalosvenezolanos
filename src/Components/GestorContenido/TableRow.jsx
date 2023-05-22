import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useContext } from 'react';
import GestorContext from '../../context/GestorContext';


function TableRow({product, openModal, openModalAdd}) {

  const {nombre, id_interno, etiqueta, precio , dia, _id} = product

  const data = useContext(GestorContext)
    const {deleteData,setDataToEdit, setDataTrends} = data
    
    const handleEdit = () =>{
        setDataToEdit( product )
        openModal()
    }

    // Esta funcion agrega un nuevo producto a la lista dbtrends
    const handleAdd = () => {
      openModalAdd()
      setDataTrends( product )

    }

  return (
    <tr>
      <td>{id_interno}</td>
      <td>{nombre}</td>
      <td>${precio}</td>
      <td>{dia}</td>
      <td>{etiqueta}</td>
      <td>
        <button className='button__options__gestor view' onClick={ handleAdd }><VisibilityIcon /></button>
        <button className='button__options__gestor edit' onClick={ handleEdit }><EditIcon /></button>
        <button className='button__options__gestor' onClick={ ()=> deleteData( _id ) }><DeleteIcon /></button>
      </td>
    </tr>
  );
}

export default TableRow;