import { useContext, useEffect, useState } from "react";
import GestorContext from "../../context/GestorContext";

const initialForm = {
  id: null,
  name: "",
  imgRoute: "",
  etiqueta: "",
  price: "",
  quantity: 0,
  day: "",
}

function FormProduct() {
  const [form, setForm] = useState(initialForm);

  const data = useContext(GestorContext)
  const {createData, updateData, dataToEdit, setDataToEdit, getDataToEdit} = data

  useEffect(() =>{
    if(dataToEdit !== null){
        setForm(dataToEdit)
    } else {
        setForm(initialForm)
        
    }
}, [dataToEdit])


  const handleChange = e =>{
    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const handleReset = () =>{
    setDataToEdit(null)
    setForm(initialForm)
  }
  
  const handleSubmit = e =>{
    e.preventDefault()
    
    if (!form.name || !form.etiqueta || !form.price) {
      alert('Por favor, rellene todos los campos requeridos');
      return;
    }
    
    if(form.id === null){
      createData(form)
    } else {
      updateData(form)
    }
    
    handleReset()
  }


  return (
    <form className="form__product__gestor" onSubmit={handleSubmit}>

      <div className="load__image__gestor__form">

      </div>

      <div className="inputs__form__products__gestor">

        <div className="container__input__products">
          <input type="text" placeholder="Nombre del Producto" name="name" value={form.name} onChange={handleChange}/>

          <input type="text" placeholder="Nombre de etiqueta" name="etiqueta" value={form.etiqueta} onChange={handleChange}/>
        </div>

        <div className="container__input__products">

        <input type="text" placeholder="Precio" name="price" value={form.price} onChange={handleChange}/>

        <input type="text" placeholder="Día Especial" name="day" value={form.day} onChange={handleChange}/>
        </div>

        <div className="">
          <input type="submit" value="Enviar"/>
          <input type="reset" value="Limpiar" onClick={handleReset}/>
        </div>
      </div>
    


    </form>
  );
}

export default FormProduct;