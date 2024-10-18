import { Link } from "react-router-dom";

const ServicesPage = ({ services }) => {
  return (
    <div className="container">
      <h1>Our Services</h1>
      <ul className="services-container">
        {services.map((service) => (
          <li key={service.id} className="service-link">
            <Link to={`/services/service-details/${service.id}`}>
              {service.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesPage;
