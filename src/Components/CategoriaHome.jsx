import { useNavigate } from "react-router-dom";
import toppers from "../assets/stories/01.png"
import FilterContext from "../context/FilterContext";
import { useContext } from "react";

const CategoriaHome = () => {
  const navigate = useNavigate()

  const valor = useContext(FilterContext)
  const {handleFilterClick, setActiveButton} = valor
  

  const handleCategoria = (name) => {
    navigate("/categorias")
  
    setTimeout(() => {
      handleFilterClick(false, name)
      setActiveButton(name)
    }, 300)
  }
    
    const Categoria = (url, name) => {
        return (
          <div className={`itemCat ${name}`}>
            <img src={url} alt={name} onClick={() => handleCategoria(name)}/>
            <p>{`${name}`}</p>
          </div>
        );
      };

    return(
        <div className="categoria__container">
          <div className="title__home">
            <h3 className="categoria__title__home">Categorías</h3>
          </div>
          <div className="container__categoria">
              {Categoria(toppers, "Cumpleaños")}
              {Categoria(toppers, "Tazas")}
              {Categoria(toppers, "Globos")}
              {Categoria(toppers, "Cuadro")}
              {Categoria(toppers, "Cuadros")}
              {Categoria(toppers, "Toppers")}
              {Categoria(toppers, "Toppers")}
          </div>
        </div>
    )

}

export default CategoriaHome