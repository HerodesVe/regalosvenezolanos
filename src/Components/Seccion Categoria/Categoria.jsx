import banner from "../../assets/principal-banner.png";
import Filter from "./Filter";
import { useContext, useEffect, useState } from "react";
import CardProducto from "../CardProducto";
import ModalProduct from "../ModalProduct";
import GestorContext from "../../context/GestorContext";
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import FilterContext from "../../context/FilterContext";

function Categoria() {
  const [showModal, setShowModal] = useState(false);
  const [showFilter, setShowFilter] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");

  const data = useContext(GestorContext)
  const {maindb} = data

  const {filteredData, setFilteredData, handleFilterClick, currentPage, setCurrentPage} = useContext(FilterContext)


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