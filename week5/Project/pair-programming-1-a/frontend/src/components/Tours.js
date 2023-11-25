import Tour from "./Tour";
import Title from "./Title";
import { useState, useEffect } from "react";

function Tours() {
  const [toursData, setToursData] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      const response = await fetch("http://localhost:4000/api/tours");
      const data = await response.json();

      if (response.ok) {
        setToursData(data);
      }
    };
    fetchTours();
  }, []);

  const handleDeleteItem = (itemId) => {
    console.log(itemId);
    const updatedItems = toursData.filter((item) => item._id !== itemId);
    setToursData(updatedItems);
  };

  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" span="tours" />
        <div className="section-center featured-center">
          {toursData &&
            toursData.map((tour) => (
              <Tour key={tour.id} tour={tour} handleDelete={handleDeleteItem} />
            ))}
        </div>
      </section>
    </div>
  );
}

export default Tours;
