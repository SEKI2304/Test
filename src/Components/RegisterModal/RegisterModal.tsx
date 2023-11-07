import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./registerModal.css";

const RegisterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Crear registro</button>

      <Modal show={isModalOpen} onHide={handleClose} className="modal-edit-category">
        <Modal.Header>
          <div className="ModalHeader">
            <Modal.Title>Crear registro</Modal.Title>
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
                <Form.Control className="Input" type="text" placeholder="Ingrese el nombre" />
              </div>
            </Form.Group>
            <Form.Group controlId="author">
              <div>
                <Form.Label>Autor</Form.Label>
              </div>
              <div>
                <Form.Control as="select" className="Input">
                  <option value="autor1">Autor 1</option>
                  <option value="autor2">Autor 2</option>
                </Form.Control>
              </div>
            </Form.Group>
            <div className="LatLongContainer">
              <Form.Group controlId="latitude" className="LatLongInput">
                <div>
                  <Form.Label>Latitud</Form.Label>
                </div>
                <div>
                  <Form.Control className="Input" type="text" placeholder="Ingrese la latitud" />
                </div>
              </Form.Group>
              <Form.Group controlId="longitude" className="LatLongInput">
                <div>
                  <Form.Label>Longitud</Form.Label>
                </div>
                <div>
                  <Form.Control className="Input" type="text" placeholder="Ingrese la longitud" />
                </div>
              </Form.Group>
            </div>
            <Form.Group controlId="description">
              <div>
                <Form.Label>Descripción</Form.Label>
              </div>
              <div>
                <Form.Control
                  as="textarea"
                  className="TextArea"
                  placeholder="Ingrese la descripción"
                  rows={4}
                />
              </div>
            </Form.Group>
            <Form.Group controlId="technique">
              <div>
                <Form.Label>Técnica</Form.Label>
              </div>
              <div>
                <Form.Control as="select" className="Input">
                  <option value="tecnica1">Técnica 1</option>
                  <option value="tecnica2">Técnica 2</option>
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group controlId="materials">
              <div>
                <Form.Label>Materiales</Form.Label>
              </div>
              <div>
                <Form.Control as="select" className="Input">
                  <option value="materiales1">Materiales 1</option>
                  <option value="materiales2">Materiales 2</option>
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group controlId="size">
              <div>
                <Form.Label>Tamaño</Form.Label>
              </div>
              <div>
                <Form.Control className="Input" type="text" placeholder="Ingrese el tamaño" />
              </div>
            </Form.Group>
            <Form.Group controlId="style">
              <div>
                <Form.Label>Estilo</Form.Label>
              </div>
              <div>
                <Form.Control as="select" className="Input">
                  <option value="estilo1">Estilo 1</option>
                  <option value="estilo2">Estilo 2</option>
                </Form.Control>
              </div>
            </Form.Group>
            <Form.Group controlId="image">
              <div>
                <Form.Label>Imagen</Form.Label>
              </div>
              <div>
                <Form.Control type="file" className="Input" />
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="BotButtons" variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button className="BotButtons" variant="primary" onClick={handleClose}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default RegisterModal;