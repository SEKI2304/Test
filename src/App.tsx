import './App.css';
import Button from "react-bootstrap/Button";
import { useState } from 'react';
import CategoryModal from './Components/CategoryModal/ModalEditCategory';
import UserModal from './Components/UserModal/UserModal';
import ReactDOM from "react-dom";
import ModalEditCategory from './Components/CategoryModal/ModalEditCategory';
import RegisterModal from './Components/RegisterModal/RegisterModal';

function App() {
  const [isEditCategoryModalOpen, setEditCategoryModalOpen] = useState(false);
  const [isCreateUserModalOpen, setCreateUserModalOpen] = useState(false);

  // Datos de ejemplo para el modal de edición de categoría
  const categoryData = {
    name: "Nombre de la categoría",
    description: "Descripción de la categoría",
  };

  const openEditCategoryModal = () => {
    setEditCategoryModalOpen(true);
  };

  const closeEditCategoryModal = () => {
    setEditCategoryModalOpen(false);
  };

  const openCreateUserModal = () => {
    setCreateUserModalOpen(true);
  };

  const closeCreateUserModal = () => {
    setCreateUserModalOpen(false);
  };

  return (
    <div className="App">
      <div>
      <ModalEditCategory/>
      <UserModal/>
      <RegisterModal/>
    </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));


export default App;
