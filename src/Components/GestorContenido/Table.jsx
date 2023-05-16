import { useContext, useEffect, useState } from "react";
import TableRow from "./TableRow";
import GestorContext from "../../context/GestorContext";

function ProductTable({openModal, search, valueSearch, openModalAdd}) {
  const data = useContext(GestorContext)

  const { db } = data
  const [ currentPage, setCurrentPage ] = useState(0);
  const [ pages, setPages ] = useState(10);

  useEffect(()=>{

    if(search > 0){
      setCurrentPage(0)
    }


  },[search])

  const filteredProducs = () => {

    if(search.length === 0){
      return db.slice(currentPage, currentPage + pages);
    }

    if (valueSearch === "id") {
      const filtered = db.filter(product => product.id.toString().startsWith(search));
      return filtered.slice(currentPage, currentPage + pages);
    }

    if(valueSearch === "name" || valueSearch === "etiqueta"){
      const filtered = db.filter(product => product[valueSearch].includes(search))
      return filtered.slice(currentPage, currentPage + pages)
    }

  };

  const nextPage = () => {
    if (db.length > currentPage + pages) {
      setCurrentPage(currentPage + pages);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - pages);
    }
  };

  const pagesSelect = (e) => {
    setPages(e.target.value)
  }

  return (
    <div className="">

    <div className="table__container">
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
          {db.length > 0 ? filteredProducs().map((product,index) => <TableRow openModalAdd={openModalAdd} openModal={openModal} key={index} product={product}/>) : "Error 504: Error del servidor al cargar los productos" }
        </tbody>
      </table >
      </div>
      <div className="footer__table__products">
        <div className="options__footer__table__products">
          <div className="buttons__table__filter">
            <button className="button__table__filter" onClick={previousPage}>Anterior</button>
            <button className="button__table__filter" onClick={nextPage}>Siguiente</button>
          </div>
          <div className="pages__pagination__filter">
            <select name="pages" className="select__pagination__filter" onChange={(e) => pagesSelect(e)}>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="30">30</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductTable;