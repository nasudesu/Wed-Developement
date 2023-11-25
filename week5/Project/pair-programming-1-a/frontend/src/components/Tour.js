import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

function Tour({ tour, handleDelete }) {
  const handleDel = () => {
    handleDelete(tour._id); // Pass the item's ID to the parent component for deletion
  };

  function getTourImage() {
    switch (tour.image) {
      case "tour1":
        return tour1;
      case "tour2":
        return tour2;
      case "tour3":
        return tour3;
      case "tour4":
        return tour4;
      default:
        return tour1;
    }
  }
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={getTourImage()} className="tour-img" alt={tour.title} />
        <p className="tour-date">{tour.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{tour.title}</h4>
        </div>
        <p>{tour.info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map"></i>
            </span>
            {tour.location}
          </p>
          <p>from ${tour.cost}</p>
          <p>{tour.duration} days</p>
        </div>
      </div>
      <div>
        <button onClick={handleDel} className="delete-button">
          Delete
        </button>
      </div>
    </article>
  );
}

export default Tour;
