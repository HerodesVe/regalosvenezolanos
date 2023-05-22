import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import GestorContext from '../../context/GestorContext';


function TableRowTrends({ product }) {

  const {nombre, id_interno, etiqueta, precio, dia, _id} = product
  const {deleteDataTrends} = useContext(GestorContext)
    

  return (
    <tr>
      <td>{id_interno}</td>
      <td>{nombre}</td>
      <td>${precio}</td>
      <td>{dia}</td>
      <td>{etiqueta}</td>
      <td> 
        <button className='button__options__gestor' onClick={() => deleteDataTrends( _id )} ><DeleteIcon /></button>
      </td>
    </tr>
  );
}

export default TableRowTrends;