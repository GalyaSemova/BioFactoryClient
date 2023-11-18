import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function DeleteProductModal({ isOpen, onClose, onDelete, productName }) {

    const handleDelete = () => {
        onDelete(); 
        onClose();
      };
    
      return (
        <Modal show={isOpen} onHide={onClose} centered>

            {/* TODO -> add Modal body content and implement on Dashboard page */}
        
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