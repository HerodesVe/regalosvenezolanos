import { useNavigate } from "react-router-dom";
import toppers from "../assets/stories/01.png"

const CategoriaHome = () => {

  const navigate = useNavigate()

  const handleCategoria = (name) => {
    navigate("/categorias")
  }
    
    const Categoria = (url, name) => {
        return (
          <div className={`itemCat ${name}`} onClick={handleCategoria}>
            <img src={url} alt={name} />
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
              {Categoria(toppers, "Toppers")}
              {Categoria(toppers, "Toppers")}
              {Categoria(toppers, "Toppers")}
              {Categoria(toppers, "Toppers")}
              {Categoria(toppers, "Toppers")}
              {Categoria(toppers, "Toppers")}
              {Categoria(toppers, "Toppers")}
          </div>
        </div>
    )

}

export default CategoriaHome