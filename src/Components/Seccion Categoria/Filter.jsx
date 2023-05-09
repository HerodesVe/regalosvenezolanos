import { useEffect, useRef, useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import "./Categoria.css"
import TodayIcon from '@mui/icons-material/Today';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ClearIcon from '@mui/icons-material/Clear';

function Filter(props) {
  const [dataProducts, setDataProducts] = useState([]);
  const [dayProducts, setDayProducts] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  const URL = "http://localhost:5000/allProducts";

  useEffect(() =>{
    helpHttp().get(URL)
        .then((data) => {
          const productsByTag = data.reduce((acc, product) => {
            const tag = product.etiqueta;
            if (acc[tag]) {
              acc[tag]++;
            } else {
              acc[tag] = 1;
            }
            return acc;
          }, {});

          setDataProducts(Object.entries(productsByTag));

          const productsByDay = data.reduce((acc, product) => {
            const day = product.day;
            if (acc[day]) {
              acc[day]++;
            } else {
              acc[day] = 1;
            }
            return acc;
          }, {});

          setDayProducts(Object.entries(productsByDay));
        })

  },[URL])



  const handleFilterClick = (tag) => {
    if (activeButton === tag) {
      props.handleFilterClick(false, false); // Pasa null y false al componente padre
      setActiveButton(null);
    } else {
      props.handleFilterClick(tag, false); // Pasa la etiqueta y true al componente padre
      setActiveButton(tag);
    }
  };

  const handleFilterDay = (day) => {
    if (activeButton === day) {
      props.handleFilterClick(false, false); // Pasa null y false al componente padre
      setActiveButton(null);
    } else {
      props.handleFilterClick(false, day); // Pasa la etiqueta y true al componente padre
      setActiveButton(day);
    }
  }

  return (
    <div className="filter__container">
      <div className="icon__close__filter">

        <ClearIcon onClick={props.handleShowFilter} />
      </div>
      <div className="categorias">
        <div className="filtered__categorias">
          <div className="festividad">
            <h3 className="title__filter__category"><TodayIcon className="festy"/> Festividad</h3>
            {dayProducts.length > 0 && dayProducts.map(([day]) => (
              <div key={day}>
                <button className={`labels__filter${activeButton === day ? " active" : ""}`} onClick={()=> handleFilterDay(day)}>
                  {day} 
                </button>
              </div>
            ))}
          </div>

            <div className="todos__los__productos">
                <h3 className="title__filter__category all-products" onClick={handleOpen}> <KeyboardArrowDownIcon
                className={`arrow__products ${isOpen ? "isOpen rotate" : ""}`}
                sx={{ fontSize: 30 }}
                /> Todos los Productos</h3>

              {isOpen && <div className="productos__filter__tags">
                {dataProducts.length > 0 && dataProducts.map(([tag, count]) => (
                  <div key={tag}>
                    <button className={`labels__filter${activeButton === tag ? " active" : ""}`}onClick={() => handleFilterClick(tag)}>
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