import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./modalEditCategory.css";

const ModalEditCategory = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Editar categoría</button>

      <Modal show={isModalOpen} onHide={handleClose} className="modal-edit-category">
        <Modal.Header>
          <div className="ModalHeader">
            <Modal.Title>Editar categoría</Modal.Title>
            <Button className="ButtonClose" variant="danger" onClick={handleClose}>
              X
            </Button>
          </div>
          <div className="ModalHeaderBody">
            <p>Completa el siguiente formulario para añadir un nuevo registro</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <div>
                <Form.Label>Nombre</Form.Label>
              </div>
              <div>
                <Form.Control className="Input" type="text" placeholder="Ingrese el nombre de la categoría" />
              </div>
            </Form.Group>
            <Form.Group controlId="description">
              <div>
                <Form.Label>Descripción</Form.Label>
              </div>
              <div>
                <Form.Control
                    as="textarea"
                    className="TextArea"
                    placeholder="Ingrese la descripción de la categoría"
                    rows={4}  
                    
                  />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="BotButtons" variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button className="BotButtons" variant="primary" onClick={handleClose}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalEditCategory;
