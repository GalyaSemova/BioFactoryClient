import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import classes from "./ProductPage.module.css";


function AddReviewModal({ isOpen, onClose, onSave, fieldErrors = {} }) {
  const [newReview, setNewReview] = useState({ reviewComment: '', rating: '1' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleSave = () => {
    onSave(newReview);
    onClose();
  };

  return (
    <Modal show={isOpen} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add Review</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formReviewComment">
            <Form.Label>Share your thoughts:</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="reviewComment"
              value={newReview.reviewComment}
              onChange={handleInputChange}
            />
            {fieldErrors.reviewComment && (
              <Form.Text className="text-danger">{fieldErrors.reviewComment}</Form.Text>
            )}
          </Form.Group>
          <Form.Group controlId="formReviewRating">
            <Form.Label>Rating:</Form.Label>
            <div className={classes.starRating}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= parseInt(newReview.rating) ? 'filled' : ''}
                  onClick={() => handleInputChange({ target: { name: 'rating', value: star.toString() } })}
                >
                  &#9733; 
                </span>
              ))}
            </div>
            {fieldErrors.rating && (
              <Form.Text className="text-danger">{fieldErrors.rating}</Form.Text>
            )}
          </Form.Group>
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

export default AddReviewModal;