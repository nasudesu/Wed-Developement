import React from "react";
import { useState, useEffect } from "react";

export default function AddTour({ addTour }) {
  const [Title, setTitle] = useState("");
  const [Info, setInfo] = useState("");
  const [Location, setLocation] = useState("");
  const [Cost, setCost] = useState("");
  const [Duration, setDuration] = useState("");
  const [Image, setImage] = useState("");
  const [Date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTour = {
      Title,
      Info,
      Location,
      Cost,
      Duration,
      Image,
      Date,
    };
    console.log(newTour);
  };
  return (
    <div className="add-tour-container">
      <form className="add-tour-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="info">Info</label>
          <input
            type="text"
            id="info"
            name="info"
            value={Info}
            onChange={(e) => setInfo(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={Location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            id="cost"
            name="cost"
            value={Cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            id="duration"
            name="duration"
            value={Duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={Image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            name="date"
            value={Date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn" onClick={addTour}>
          Submit
        </button>
      </form>
    </div>
  );
}
