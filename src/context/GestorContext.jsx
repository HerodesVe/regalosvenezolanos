import { createContext, useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";

const GestorContext = createContext()


const GestorProvider = ({children}) => {
    const [db, setDb] = useState([])
    const [dbTrends, setDbTrends] = useState([]);
    const [maindb, setMaindb] = useState([]); //Almacena tanto la base de datos de todos los productos, y la de trends


    const [dbIDTrends, setDbIDTrends] = useState([]); //base de datos de los ID
    const [dataTrends, setDataTrends] = useState(null);


    const [dataToEdit, setDataToEdit] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    let api = helpHttp()
    let url = "http://localhost:5000/allProducts"
    const urlTrends = "http://localhost:5000/trends"

    useEffect(() => {
        setLoading(true);

        helpHttp()
          .get(urlTrends)
          .then((res) => {
            
            if (!res.err) {
              setDbIDTrends(res);
              setError(null);

            } else {
              setDbIDTrends(null);
              setError(res);
            }
            setLoading(false);
          });

    }, [urlTrends]); //ACTUALIZA dbIDTrends

    useEffect(() => {
        setLoading(true);
        helpHttp()
          .get(url)
          .then((res) => {
            
            if (!res.err) {

              setDb(res);
              setError(null);

            } else {

              setDb(null);
              setError(res);
            }
            setLoading(false);
          });

    }, [url]);

    useEffect(() => {
      const ID = []
      const idProduct = dbIDTrends.map(el => ID.push(el.id))

      if (ID.length && db.length && dbIDTrends.length) {
        const filteredProducts = db.filter(product => ID.includes(product.id));
        setDbTrends(filteredProducts);
       
    }

    const IDtrends = dbIDTrends.map(el => el.id);

        if (IDtrends.length && db.length && dbIDTrends.length) {
            const filteredProducts = db.filter(product => !IDtrends.includes(product.id));
            setMaindb(dbTrends.concat(filteredProducts));
        } else {
            setMaindb(dbTrends.concat(db));
        }

    }, [dbIDTrends, db]);


    useEffect(() => {
        if(dataTrends){
            addData(dataTrends)
        }
     
    }, [dataTrends])
  


    const getDataToEdit = () => {
      return dataToEdit;
    };

    const addData = (data) =>{

        const provisional = {
            id: data.id
        }
       
        let options = {
            body: provisional, 
            headers: {"content-type": "application/json"}
        }


        helpHttp().post(urlTrends,options).then((res) =>{
            if (!res.err){
                setDbIDTrends([...dbIDTrends, res])
                setDataTrends(null)
            }else{
                setError(res)
            }
        }
    )
    }
    
    const deleteDataTrends = (id) =>{
        let isDelete = window.confirm(`Estás seguro que quieres eliminar el registro con el id ${id}?`)

        if(isDelete){
            let endpoint = `${urlTrends}/${id}`
            let options = {
                headers: {"content-type": "application/json"}
            }
                api.del(endpoint,options).then((res) => {
                if(!res.err){
                    let newData = dbTrends.filter(el => el.id !== id)
                    setDbTrends(newData)
                } else{
                    setError(res)
                }
            })
            }else{
                return;
            }
    }


    const createData = (data) =>{
        //Recoge la data del Form y la agrega a nuestra base de datos
        data.id = Date.now()

        // Cuerpo y cabecera para la peticion POST
        let options = {
            body:data, 
            headers: {"content-type": "application/json"}
        }

        // PETICION POST
        api.post(url,options).then((res) =>{
            if (!res.err){
                setDb([...db, res])
            }else{
                setError(res)
            }
        }
    )
    }

    const updateData = (data) => {
        let endpoint = `${url}/${data.id}`

        let options = {
            body:data, 
            headers: {"content-type": "application/json"}
        }

        //Envia el put, el put recibe la URL que vamos a editar, que en este caso es nuestra URL junto con el ID, para ser editado, cogemos la data del formulario y al enviar se actualiza con la nueva data
        api.put(endpoint,options).then((res) => {
            if(!res.err){
                let newData = db.map(el => el.id === data.id ? data : el)
                setDb(newData)
            }else{
                setError(res)
            }
        })

    }

    const deleteData = (id) =>{
        let isDelete = window.confirm(`Estás seguro que quieres eliminar el registro con el id ${id}?`)

        if(isDelete){
            let endpoint = `${url}/${id}`
            let options = {
                headers: {"content-type": "application/json"}
            }
        
                api.del(endpoint,options).then((res) => {
                if(!res.err){
                    let newData = db.filter(el => el.id !== id)
                    setDb(newData)
                } else{
                    setError(res)
                }
            })
            }else{
                return;
            }
        }


    const data = {createData, updateData, deleteData, db, setDataToEdit, error, loading, getDataToEdit, dataToEdit, dbTrends, setDataTrends, dataTrends, deleteDataTrends, maindb}

    return(
        <GestorContext.Provider value={data}>
            {children}
        </GestorContext.Provider>
    )

}

export default GestorContext
export {GestorProvider}