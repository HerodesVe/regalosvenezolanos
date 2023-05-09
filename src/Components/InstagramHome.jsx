import { useEffect, useState } from "react"
import Play from '@mui/icons-material/PlayArrow'
import Carrusel from '@mui/icons-material/AutoAwesomeMotionOutlined';
import Logo from "../assets/logo-ig.jpg"

let initialData = {
    url: "",
    permalink: "",
    id: "",
    svg: null
}

const InstagramHome = () => {
  const [data, setData] = useState(initialData)

  // useEffect(() => {
  //   const token = "IGQVJWYVJTOWdyVlVtQVF5MFBaRjU1elRiWlIzaVlXU1RETlJKVnN5aGhodFN4Y1lIZAlN1RXotRDhIbzkxRkRza0t6RTBQdFB0c1NNZAzZAMSVV3bHhtcklKWDMzV2RlSzQ0cDBMUlNNTVpSUlc0emF3LQZDZD"

  //   // "IGQVJVQzRXRlVKc2tTTng5WlgzbE90cFc1M01KQTYzSy1HdTlubURzTDVTbXNtODRWejVjMFcxZAHN2S2djS0VyYndQdVJjOEtoTUlMWXVPSEJTUEpMVlZADbllTeElla2QtYUZAXblBLMlJYZAmc3Q2E1dAZDZD"
  //   const URL = `https://graph.instagram.com/me/media?fields=media_url,thumbnail_url,permalink,media_type&size=medium&access_token=${token}`



  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data.data.map((item) =>{

  //           if(item.media_type === "IMAGE" ){
  //               return { ...data,
  //                   url: item.media_url,
  //                   permalink: item.permalink,
  //                   id: item.id,
  //                   svg: null
  //               }
  //           }

  //           if(item.media_type === "CAROUSEL_ALBUM"){
  //               return { ...data,
  //                   url: item.media_url,
  //                   permalink: item.permalink,
  //                   id: item.id,
  //                   svg:<Carrusel className="carrusel-icon"  fontSize="large"/>
  //               }
  //           }

  //           if(item.media_type === "VIDEO"){
  //               return { ...data,
  //                   url: item.thumbnail_url,
  //                   permalink: item.permalink,
  //                   id: item.id,
  //                   svg: <Play className="play-icon" color="white" sx={{ fontSize: 60 }}/>
  //               }
  //           }

  //       }))
  //     })
  // }, [])


  return (
    <div className="instagram__home">
      <div className="container__titles__ig">
        <div className="container__img__logo__ig">
            <a target="_blank" href="https://www.instagram.com/regalosvenezolanos/"><img src={Logo} alt="regalosvenezolanos" /></a>
          </div>
        <div className="follow__me">
            <p className="follow__ig__title">Siguenos en Instagram</p>
            <a target="_blank" href="https://www.instagram.com/regalosvenezolanos/" className="principal__title__instragram">@regalosvenezolanos</a>
        </div>

      </div>
      <div className="container__img__instagram">
        {data.length > 0 &&
          data.map((el) => (
            <a target="_blank" href={el.permalink} className="item__instagram" key={el.id}>
              <img src={el.url} alt="Instagram Photo" />
              {el.svg && el.svg}
            </a>
          ))}
      </div>
      
    </div>
  )
}

export default InstagramHome