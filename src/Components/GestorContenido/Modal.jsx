import "./Modal.css"

const Modal = ({children, isOpen, closeModal}) =>{

    const handleModaleContainerClick = (e) =>{
        e.stopPropagation()
    }

    return(
        <article className={`modal ${isOpen && `is-open`}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModaleContainerClick}>
                <button onClick={closeModal} className="modal-close">X</button>
                {children}
            </div>
        </article>
    )
}

export default Modal