import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState, useEffect } from 'react';

// TODO check why the validation messages aree not displayed properly

function EditProductModal({ isOpen, onClose, product, onSave, fieldErrors }) {
  const [editedProduct, setEditedProduct] = useState({ ...product });

  useEffect(() => {
    setEditedProduct({ ...product });
  }, [product]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    onSave(editedProduct);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formProductName">
            <Form.Label>Product Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={editedProduct.name}
              onChange={handleInputChange}
            />
            {fieldErrors.name && (
              <Form.Text className="text-danger">{fieldErrors.name}</Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="formProductImageUrl">
            <Form.Label>Image Url:</Form.Label>
            <Form.Control
              type="text"
              name="nameimageUrl"
              value={editedProduct.imageUrl}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group controlId="formProductQuantity">
            <Form.Label>Quantity:</Form.Label>
            <Form.Control
              type="text"
              name="quantityAvailable"
              value={editedProduct.quantityAvailable}
              onChange={handleInputChange}
            />
             {fieldErrors.quantityAvailable && (
              <Form.Text className="text-danger">{fieldErrors.quantityAvailable}</Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="formProductPrice">
            <Form.Label>Price(EUR):</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={editedProduct.price}
              onChange={handleInputChange}
            />
             {fieldErrors.price && (
              <Form.Text className="text-danger">{fieldErrors.price}</Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="formProductDescription">
            <Form.Label>Description:</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              name="description"
              value={editedProduct.description}
              onChange={handleInputChange}
            />
          </Form.Group>
          {/* <Form.Group controlId="formProductSubcategory">
            <Form.Label>Subcategory:</Form.Label>
            <Form.Control
              type="text"
              name="subcategory"
              value={editedProduct.subcategory}
              onChange={handleInputChange}
            />
          </Form.Group> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleSave} style={{ backgroundColor: '#008000', borderColor: '#008000' }}>
          Save
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditProductModal;