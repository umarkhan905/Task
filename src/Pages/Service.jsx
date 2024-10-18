import { Link, useParams } from "react-router-dom";

const Service = ({ services }) => {
  const { id } = useParams();
  const service = services?.find((service) => service.id === parseInt(id));

  if (!service) {
    return <h1>Service not found</h1>;
  }
  return (
    <div className="service">
      <h1>{service.name}</h1>
      <p>{service.details}</p>
      <Link to="/">Back to Services</Link>
    </div>
  );
};

export default Service;
