import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditMovie = ({ handleEdit, movie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(movie.title);
  const [image, setImage] = useState(movie.posterURL);
  const [rating, setRating] = useState(movie.rating);
  const [date, setDate] = useState(movie.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editedMovie = {
      ...movie,
      title: name,
      posterURL: image,
      rating,
      date,
    };
    handleEdit(editedMovie);
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className="btn edit-btn">
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Edit Movie Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Movie Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Movie Poster</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <StarRating rating={rating} onRatingChange={setRating} />
          <label>Release Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div>
            <button className="btn cancel-btn" onClick={closeModal}>
              Cancel
            </button>
            <button className="btn confirm-btn" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditMovie;
