import { services } from "../data";
import Service from "./Service";
import Title from "./Title";
import { useState } from "react";

function Services() {
  const [servicesData, setServicesData] = useState(services);

  const handleDeleteItem = (id) => {
    // Filter out the item with the specified ID and update the state
    const updatedItems = servicesData.filter((item) => item.id !== id);
    setServicesData(updatedItems);
  };

  return (
    <section className="section services" id="services">
      <Title title="our" span="services" />
      <div className="section-center services-center">
        {servicesData.map((service) => (
          <Service key={service.id} {...service} onDelete={handleDeleteItem} />
        ))}
      </div>
    </section>
  );
}

export default Services;
