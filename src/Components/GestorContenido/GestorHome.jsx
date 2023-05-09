import ProductTable from "./Table";
import NavGestor from "./NavGestor";
import GestorOptions from "./GestorOptions";
import "./GestorHome.css"
import FormProduct from "./FormProduct";
import Modal from "./Modal";
import { useState } from "react";
import TableTrends from "./TableTrends";


function GestorHome() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [search, setSearch] = useState("");
  const [valueSearch, setValueSearch] = useState("id");
  

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModalAdd = () => {
    setIsOpenAdd(false)
  }

  const openModalAdd = () => {
    setIsOpenAdd(true)
  }

  return ( 
    <div className="gestor__home">
      <NavGestor />
      <div className="gestor__main__content">
        <div className="gestor__table__container">
          <GestorOptions openModal={openModal} setSearch={setSearch} setValueSearch={setValueSearch} valueSearch={valueSearch} openModalAdd={openModalAdd}/>
          <ProductTable openModal={openModal} openModalAdd={openModalAdd} search={search} valueSearch={valueSearch} />
        </div>

          <Modal isOpen={isOpen} closeModal={closeModal}>
            <FormProduct />
          </Modal>

          <Modal isOpen={isOpenAdd} closeModal={closeModalAdd} >
            <TableTrends openModal={openModalAdd}/>
          </Modal>

      </div>
    </div>
   );
}

export default GestorHome;