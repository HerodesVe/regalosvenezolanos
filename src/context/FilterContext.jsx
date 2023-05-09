import { createContext, useState } from "react";

const FilterContext = createContext()

const FilterProvider = ({children}) => {
  const [filteredData, setFilteredData] = useState([]);
  const [filterActive, setFilterActive] = useState(false);
  
  const handleFilterClick = (label, day) => {

    if(label === false && day === false){
      setFilteredData(maindb);
      setFilterActive(false);
      setCurrentPage(0);
    }
   
    if(label){
      if (filterActive && label === null) {
        // Si se desactiva el filtro, se muestra todos los productos
        setFilteredData(maindb);
        setFilterActive(false);

      } else if (label !== null) {
        // Si se selecciona una etiqueta, se filtran los productos por la etiqueta
        const filtered = maindb.filter((product) => product.etiqueta.includes(label));
        setFilteredData(filtered);
        setFilterActive(true);
      }
      setCurrentPage(0);
    }

    if(day){

      if (filterActive && day === null) {
        // Si se desactiva el filtro, se muestra todos los productos
        setFilteredData(maindb);
        setFilterActive(false);
      } else if (day !== null) {
        // Si se selecciona una etiqueta, se filtran los productos por la etiqueta
        const filtered = maindb.filter((product) => product.day.includes(day));
        setFilteredData(filtered);
        setFilterActive(true);
      }
      setCurrentPage(0);

    }

    console.log(label, day)
  };
  

  const data = {filteredData, setFilterActive, setFilteredData, filterActive, handleFilterClick}

  return(
    <FilterContext.Provider value={data}>
      {children}
    </FilterContext.Provider>
  )

}