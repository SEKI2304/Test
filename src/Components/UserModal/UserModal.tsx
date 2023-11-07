import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./userModal.css";

const UserModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Crear Usuario</button>

      <Modal show={isModalOpen} onHide={handleClose} className="modal-create-user">
        <Modal.Header>
          <div className="ModalHeader">
            <Modal.Title>Crear Usuario</Modal.Title>
            <Button className="ButtonClose" variant="danger" onClick={handleClose}>
              X
            </Button>
          </div>
          <div className="ModalHeaderBody">
            <p>Completa el siguiente formulario para añadir un nuevo usuario</p>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <div>
                <Form.Label>Nombre</Form.Label>
              </div>
              <div>
                <Form.Control className="Input" type="text" placeholder="Ingrese el nombre del usuario" />
              </div>
            </Form.Group>
            <Form.Group controlId="email">
              <div>
                <Form.Label>Email</Form.Label>
              </div>
              <div>
                <Form.Control className="Input" type="email" placeholder="Ingrese el email del usuario" />
              </div>
            </Form.Group>
            <Form.Group controlId="password">
              <div>
                <Form.Label>Contraseña</Form.Label>
              </div>
              <div>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  className="Input"
                  placeholder="Ingrese la contraseña"
                />
                <Button
                  variant="secondary"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ShowPasswordButton"
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </Button>
              </div>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <div>
                <Form.Label>Repetir Contraseña</Form.Label>
              </div>
              <div>
                <Form.Control
                  type={showConfirmPassword ? "text" : "password"}
                  className="Input"
                  placeholder="Repita la contraseña"
                />
                <Button
                  variant="secondary"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="ShowPasswordButton"
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="BotButtons" variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button className="BotButtons" variant="primary" onClick={handleClose}>
            Añadir
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UserModal;
