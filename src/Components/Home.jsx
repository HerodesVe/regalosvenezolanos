import banner from "../assets/principal-banner.png"
import CategoriaHome from "./CategoriaHome"
import ContactoHome from "./ContactoHome"
import InstagramHome from "./InstagramHome"
import ProductHome from "./ProductHome"
import TendeciaHome from "./TendenciaHome"



const Home = () =>{
    return (
        <div className="home__container">
            <div className="banner__container">
                <img src={banner} alt="Regalos Venezolanos" />
            </div>
            <CategoriaHome />
            <TendeciaHome />
            <ProductHome />
            <InstagramHome />
            <ContactoHome />

            
        </div>
    )
}

export default Home