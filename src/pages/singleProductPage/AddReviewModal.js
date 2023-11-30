import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import classes from "./ProductPage.module.css";


function AddReviewModal({ isOpen, onClose, onSave, fieldErrors = {} }) {
  const [newReview, setNewReview] = useState({ reviewComment: '', rating: '0' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  // Handle star on click
  // const handleStarClick = (selectedRating) => {
  //   setNewReview({ ...newReview, rating: selectedRating.toString() });
  // };
  const handleStarClick = (selectedRating) => {
    console.log('Star clicked!', selectedRating);
    const newRating = selectedRating.toString();
    setNewReview((prevReview) => ({
      ...prevReview,
      rating: newRating,
    }));
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
              {/* {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= parseInt(newReview.rating) ? 'filled' : ''}
                  onClick={() => handleInputChange({ target: { name: 'rating', value: star.toString() } })}
                >
                  &#9733; 
                </span>
              ))} */}
                {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`star ${star <= parseInt(newReview.rating) ? classes.filled : ''}`}
                  onClick={() => handleStarClick(star)}
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