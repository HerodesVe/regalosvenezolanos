import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import GestorContext from '../../context/GestorContext';


function TableRowTrends({product}) {

  const {name, id, etiqueta, price} = product
  const {deleteDataTrends} = useContext(GestorContext)
    

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>${price}</td>
      <td>Día de las Madres</td>
      <td>{etiqueta}</td>
      <td> 
        <button className='button__options__gestor' onClick={() => deleteDataTrends(id)} ><DeleteIcon /></button>
      </td>
    </tr>
  );
}

export default TableRowTrends;