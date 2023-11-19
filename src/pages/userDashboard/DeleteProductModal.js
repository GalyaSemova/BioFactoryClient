import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function DeleteProductModal({ isOpen, onClose, onDelete, productName }) {

    const handleDelete = () => {
        onDelete(); 
        onClose();
      };
    
      return (
        <Modal show={isOpen} onHide={onClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Delete Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Are you sure you want to delete the product "{productName}"?</p>
          </Modal.Body>  
         <Modal.Footer>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      );

}

export default DeleteProductModal;