import { useContext } from "react";
import GestorContext from "../../context/GestorContext";
import TableRowTrends from "./TableRowTrends";
import "./GestorHome.css"
import WarningAmberIcon from '@mui/icons-material/WarningAmber';


function TableTrends({openModal}) {
  const data = useContext(GestorContext)
  const {dbTrends} = data

  return (
    <div className="table__trends__container table__container">
      <div className="welcome__trends__container">
        <p>Esta tabla almacena todos los productos del inicio de la pagina</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Articulo</th>
            <th>Precio</th>
            <th>Celebración</th>
            <th>Etiqueta</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {dbTrends.length > 0 && dbTrends.map((product,index) => <TableRowTrends openModal={openModal} key={index} product={product}/>)}
        </tbody>
      </table >
      <div className="disclaimer__trends">
        <p className="text__disclaimer"> <WarningAmberIcon />Es recomendable tener al menos 6 productos en esta sección</p>
        <p className="text__disclaimer"> <WarningAmberIcon />Si esta tabla queda vacía, no habrán productos en el Home</p>
      </div>
    </div>
  
  );
}

export default TableTrends;