import Service from "./Service";
import Title from "./Title";
import { useState, useEffect } from "react";

function Services() {
  const [servicesData, setServicesData] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await fetch("http://localhost:4000/api/services");
      const data = await response.json();

      if (response.ok) {
        setServicesData(data);
      }
    };
    fetchServices();
  }, []);
  return (
    <div>
      <section className="section services" id="services">
        <Title title="our" span="services" />
        <div className="section-center services-center">
          {servicesData &&
            servicesData.map((service) => (
              <Service key={service._id} service={service} />
            ))}
        </div>
      </section>
    </div>
  );
}

export default Services;
