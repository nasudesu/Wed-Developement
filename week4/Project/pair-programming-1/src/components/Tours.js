import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";
import { useState } from "react";

function Tours() {
  const [toursData, setToursData] = useState(tours);
  const handleDeleteTour = (lol) => {
    const upadtedTours = toursData.filter((item) => item.id !== lol);
    setToursData(upadtedTours);
  };
  return (
    <section className="section" id="tours">
      <Title title="featured" span="tours" />
      <div className="section-center featured-center">
        {toursData.map((tour) => (
          <Tour key={tour.id} {...tour} onDelete={handleDeleteTour} />
        ))}
      </div>
    </section>
  );
}

export default Tours;
