import { useContext, useEffect, useRef, useState } from "react";
import "./Categoria.css"
import TodayIcon from '@mui/icons-material/Today';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';
import FilterContext from "../../context/FilterContext";
import GestorContext from "../../context/GestorContext";

function Filter(props) {
  const [dataProducts, setDataProducts] = useState([]);
  const [dayProducts, setDayProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const {handleFilterTag, handleFilterDay, activeButton} = useContext(FilterContext)
  
  const data = useContext(GestorContext)
  const {db} = data

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() =>{
          let data = db

          const productsByTag = data.reduce((acc, product) => {
            const tag = product.etiqueta;
            if (acc[tag]) {
              acc[tag]++;
            } else {
              acc[tag] = 1;
            }
            return acc;
          }, {});

          setDataProducts( Object.entries( productsByTag ) );

          const productsByDay = data.reduce((acc, product) => {
            const dia = product.dia;
            if (acc[dia]) {
              acc[dia]++;
            } else {
              acc[dia] = 1;
            }
            return acc;
          }, {});

          setDayProducts(Object.entries(productsByDay));
        

  },[db])


  return (
    <div className="filter__container">
      <div className="icon__close__filter">

        <ClearIcon onClick={props.handleShowFilter} />
      </div>
      <div className="categorias">
        <div className="filtered__categorias">
          <div className="festividad">
            <h3 className="title__filter__category"><TodayIcon className="festy"/> Festividad</h3>
            {dayProducts.length > 0 && dayProducts.map(([dia]) => (
              <div key={dia}>
                <button className={`labels__filter${activeButton === dia ? " is-active" : ""}`} onClick={()=> handleFilterDay(day)}>
                  {dia} 
                </button>
              </div>
            ))}
          </div>

            <div className="todos__los__productos">
                <h3 className="title__filter__category all-products" onClick={ handleOpen }> <KeyboardArrowDownIcon
                className={`arrow__products ${isOpen ? "isOpen rotate" : ""}`}
                sx={{ fontSize: 30 }}
                /> Todos los Productos</h3>

              {isOpen && <div className="productos__filter__tags">
                {dataProducts.length > 0 && dataProducts.map(([tag, count]) => (
                  <div key={ tag }>
                    <button className={`labels__filter${activeButton === tag ? " is-active" : ""}`}onClick={() => handleFilterTag( tag )}>
                      {tag} 
                    </button>
                  </div>
                ))}
              </div>}
            </div>

        </div>
      </div>
    </div>
  );
}

export default Filter;