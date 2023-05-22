import { useContext, useEffect, useRef, useState } from "react";
import GestorContext from "../../context/GestorContext";

const initialForm = {
  id_interno: null,
  nombre: "",
  img: "img",
  etiqueta: "",
  precio: "",
  dia: "",
  detalles: "",
  descripcion: "",
  imagen: "img"
}

function FormProduct() {
  const [form, setForm] = useState(initialForm);
  const [imagePreview, setImagePreview] = useState(null);
  const [drop, setDrop] = useState(false)

  const fileInputRef = useRef(null)


  const data = useContext(GestorContext)
  const {createData, updateData, dataToEdit, setDataToEdit} = data

  useEffect(() =>{

    if(dataToEdit !== null){
        setForm(dataToEdit)
    } else {
        setForm(initialForm)
        
    }
}, [dataToEdit])

  useEffect(()=> {

    if ( imagePreview ) {
      setDrop(true)
    }else {
      setDrop(false)
    }

  },[imagePreview])


  const handleChange = e =>{

    setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

  const handleReset = () =>{
    setDataToEdit(null)
    setForm(initialForm)
    setImagePreview(null)
  }
  
  const handleSubmit = e =>{
    e.preventDefault()
    
    if (!form.nombre || !form.etiqueta || !form.precio || !form.detalles || !form.descripcion) {
      alert('Por favor, rellene todos los campos requeridos');
      return;
    }
    
    if(form.id_interno === null){
      createData(form)
    } else {
      updateData(form)
    }
    
    handleReset()
  }

  const handleIMG = async(e) => {
    
    const file = e.target.files[0];
    
    setForm({
      ...form,
      imagen: e.target.files[0],
    });


    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener('load', (e) => {
      setImagePreview(e.target.result);
    });

  };

  const handleClickIMG = () => {
   fileInputRef.current.click()
  }

  const dragIMG = (e) => {
    e.preventDefault()
    setDrop(true)
  }

  const dragLeaveIMG = (e) => {
    e.preventDefault()
    setDrop(false)
  }

  const dropIMG = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleIMG({ target: { files: [file] } });
  };


  return (
    <form className="form__product__gestor" onSubmit={handleSubmit}>

      <div className="load__image__gestor__form">
      <div className={`${'push__image__form__gestor'} ${drop ? `drop-Active` : ``}`} onClick={handleClickIMG} onDragOver={ (e) => dragIMG(e)} onDragLeave={(e) => dragLeaveIMG(e)} onDrop={ (e) => dropIMG(e)}>
          {imagePreview ? (
            <img src={imagePreview} className="img-preview" alt="Preview" />
          ) : (
            <div>
              <p>Arrastra o presiona click para subir una imagen</p>
              <input type="file"className="input-oculto" name="img" ref={fileInputRef} onChange={(e) => handleIMG(e)} />
            </div>
          )}
        </div>
      </div>

      <div className="inputs__form__products__gestor">
        <div className="info__basic__gestor">
            <p className="title__info__gestor">Información Básica</p>

            <div className="container__input__products">
              <input type="text" placeholder="Nombre del Producto" name="nombre" value={form.nombre} onChange={handleChange}/>
              <input type="text" placeholder="Nombre de etiqueta" name="etiqueta" value={form.etiqueta} onChange={handleChange}/>
            </div>

            <div className="container__input__products">

            <input type="text" placeholder="Precio" name="precio" value={form.precio} onChange={handleChange}/>

            <input type="text" placeholder="Día Especial" name="dia" value={form.dia} onChange={handleChange}/>
          </div>

        </div>
        <div className="info__details__products__gestor">
          <p className="title__info__gestor">Información Detallada</p>

          <input type="text" name="detalles" value={form.detalles} placeholder="Material" onChange={handleChange}/>

          <textarea name="descripcion" value={form.descripcion} id="" cols="30" rows="10" className="textarea-gestor" placeholder="Descripcion del Producto" onChange={handleChange}>

          </textarea>

          <div className="checkbox__container__gestor">
            <div className="checkbox__gestor">
              <label htmlFor="envoltura">Envoltura</label>
              <input type="checkbox" name="envoltura"/>
            </div>
            <div className="checkbox__gestor">
              <label htmlFor="decoracion">Decoración</label>
              <input type="checkbox" name="decoracion"/>
            </div>
          </div>
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