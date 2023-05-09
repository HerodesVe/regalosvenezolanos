import banner from "../../assets/principal-banner.png";
import Filter from "./Filter";
import { useContext, useEffect, useState } from "react";
import CardProducto from "../CardProducto";
import ModalProduct from "../ModalProduct";
import GestorContext from "../../context/GestorContext";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

function Categoria() {
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [filterActive, setFilterActive] = useState(false);

  const data = useContext(GestorContext)
  const {maindb} = data

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1050) {
        setShowFilter(false);
      } else {
        setShowFilter(true);
      }
    }
    handleResize(); // Ejecutar para establecer el valor inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowFilter = () =>{
    setShowFilter(!showFilter)
  }

  useEffect(() => {
    if (search.length === 0) {
      setFilteredData(maindb);
    } else {
      const filtered = maindb.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [search, maindb]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const filteredProducs = () => {
    return filteredData.slice(currentPage, currentPage + 6);
  };
  const nextPage = () => {
    if (filteredData.length > currentPage + 6) {
      setCurrentPage(currentPage + 6);
    }
  };

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 6);
    }
  };

  const onSearchChange = ({ target }) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

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

  return (
    <div className="categoria__main__container">
      <div className="banner__container">
        <img src={banner} alt="Regalos Venezolanos" />
      </div>
      <div className="categoria__filter__products__container">
        {showFilter && <Filter handleFilterClick={handleFilterClick} handleShowFilter={handleShowFilter} />}
        <div className="categoria__products">
          <div className="input__container__products">
            <div className="filter__icon__responsive" onClick={handleShowFilter}>
              <TuneOutlinedIcon />
            </div>
            <input className="input__category" type="text" value={search} placeholder="Buscar" name="search__category" onChange={onSearchChange}/>
          </div>
          <div className="products">
            {filteredData.length > 0 &&
              filteredProducs().map((el, index) => (
                <CardProducto
                  key={index}
                  el={el}
                  handleCardClick={handleCardClick}
                />
              ))}
          </div>
          <div className="container__buttons__categoria">
            <button className="button__categoria" onClick={previousPage}>Anterior</button>{" "}
            <button className="button__categoria" onClick={nextPage}>Siguiente</button>
          </div>
        </div>
      </div>

      {showModal && selectedProduct && (
        <ModalProduct
          product={selectedProduct}
          onClose={() => {
            setSelectedProduct(null)
            setShowModal(false)
          }}
        />
      )}
    </div>

   );
}

export default Categoria;