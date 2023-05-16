import { createContext, useContext, useEffect, useState } from "react";
import GestorContext from "./GestorContext";

const FilterContext = createContext()

const FilterProvider = ({children}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeButton, setActiveButton] = useState(null);

  const data = useContext(GestorContext)
  const {maindb} = data

  
  const handleFilterClick = (label, day) => {

    if(label === false && day === false){
      setFilteredData(maindb);
      setFilterActive(false);
      setCurrentPage(0);
    }
   
    if(label){
      if (filterActive && label === false) {
        // Si se desactiva el filtro, se muestra todos los productos
        setFilteredData(maindb);
        setFilterActive(false);

      } else if (label !== false) {
        // Si se selecciona una etiqueta, se filtran los productos por la etiqueta
        const filtered = maindb.filter((product) => product.etiqueta.includes(label));
        setFilteredData(filtered);
        setFilterActive(true);
      }
      setCurrentPage(0);
    }

    if(day){

      if (filterActive && day === false) {
        // Si se desactiva el filtro, se muestra todos los productos
        setFilteredData(maindb);
        setFilterActive(false);
      } else if (day !== false) {
        // Si se selecciona una etiqueta, se filtran los productos por la etiqueta
        const filtered = maindb.filter((product) => product.day.includes(day));
        setFilteredData(filtered);
        setFilterActive(true);
      }
      setCurrentPage(0);

    }


  };

  const handleFilterTag = (tag) => {
    if (activeButton === tag) {
      handleFilterClick(false, false); // Pasa null y false al componente padre
      setActiveButton(null);
    } else {
      handleFilterClick(tag, false); // Pasa la etiqueta y true al componente padre
      setActiveButton(tag);
    }
  };

  const handleFilterDay = (day) => {
    if (activeButton === day) {
      handleFilterClick(false, false); // Pasa null y false al componente padre
      setActiveButton(null);
    } else {
      handleFilterClick(false, day); // Pasa la etiqueta y true al componente padre
      setActiveButton(day);
    }
  }

  

  const valor = {filteredData, setFilterActive, setFilteredData, filterActive, handleFilterClick, currentPage, setCurrentPage, handleFilterTag, handleFilterDay, activeButton, setActiveButton}

  return(
    <FilterContext.Provider value={valor}>
      {children}
    </FilterContext.Provider>
  )

}

export {FilterProvider}
export default FilterContext