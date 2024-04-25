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

const AddNewMovie = ({ handleAddMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(1);
  const [date, setDate] = useState("");

  const handleRating = (value) => setRating(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Math.random().toString(36).substring(7),
      title,
      posterURL,
      rating,
      date,
    };
    handleAddMovie(newMovie);
    closeModal();
    setTitle("");
    setPosterURL("");
    setRating(1);
    setDate("");
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal} className="add-movie-btn">
        Add
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Movie Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Movie Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Poster URL</label>
          <input
            type="text"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
          />
          <StarRating rating={rating} onRatingChange={handleRating} />
          <label>Release Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div>
            <button className="btn" onClick={closeModal}>
              Cancel
            </button>
            <button className="btn" type="submit">
              Confirm
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewMovie;
