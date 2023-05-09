import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { pink } from '@mui/material/colors';



const ContactoHome = () => {
    function Mapa() {
        return (
          <div className="container__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1194.9029290953536!2d-71.31098115789511!3d10.201961564883948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89d10198e17fdb%3A0x8e0348372ec4bca!2sRegalos%20Venezolanos!5e0!3m2!1ses!2sve!4v1681816050371!5m2!1ses!2sve"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        );
      }


    return (
        <div className="contacto__container">
            <div className="info__contact__container">
              <div className="title__contact__contaniner">
                <h2 className="contacto__title">Contactanos</h2>
              </div>
            <div className="info__contact__container">
              <div className="info__contact__ubication">
                <PlaceIcon className='icon__contact' sx={{ color: pink[500], fontSize: 35 }}  /> <p className='text__contact'> Calle Campo Elías, diagonal a la iglesia los Corintios, Ciudad Ojeda, edo Zulia</p> 
                </div>
                <div className="info__contact__telf">
                  <WhatsAppIcon className='icon__contact' sx={{ fontSize: 35 }}/> <a className='text__contact' href="https://api.whatsapp.com/send?phone=584121648410&text=Hola%20%23FamiliaRegalosVenezolanos%20%C2%BFPodr%C3%ADan%20ayudarme%20con%20un%20regalo%20para%20entregar%20hoy%3F%20%F0%9F%98%B0">+58 412-1648410</a>
                </div>
                <div className="info__contact__clock">
                  <AccessTimeIcon className='icon__contact' sx={{ fontSize: 35 }} /> <p className='text__contact'>Lun - Vie 8:30 - 16:30</p>
                </div>
              </div>
          

            </div>
            <div className="info__map__container">
                <Mapa />
            </div>

        </div>
    )
}

export default ContactoHome