import { useEffect, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { putUpdateUser } from "../services/UserService";
import { toast } from "react-toastify";

const ModalEdit = (props) => {
  const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props;
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleEditUser = async () => {
    let res = await putUpdateUser(name, lastName, email);
    if (res && res.updatedAt) {
      //success
      handleEditUserFromModal({
        email: email,
        first_name: name,
        last_name: lastName,
        id: dataUserEdit.id,
      });
      handleClose();
      console.log("res API UpdateUser: ", res);
      toast.success("Update User Success!");
    }
  };

  useEffect(() => {
    if (show) {
      // when close modal, it dont run
      setEmail(dataUserEdit.email);
      setName(dataUserEdit.first_name);
      setLastName(dataUserEdit.last_name);
    }
    // eslint-disable-next-line
  }, [dataUserEdit]);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={true}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleEditUser()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEdit;
