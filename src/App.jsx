import { Service, ServicesPage } from "./Pages";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const services = [
    {
      id: 1,
      name: "Web Development",
      details: "Here is some web development details",
    },
    {
      id: 2,
      name: "SEO",
      details: "Here is some SEO details",
    },
    {
      id: 3,
      name: "Digital marketing",
      details: "Here is some digital marketing details",
    },
    {
      id: 4,
      name: "Graphic design",
      details: "Here is some graphic design details",
    },
    {
      id: 5,
      name: "Video editing",
      details: "Here is some video editing details",
    },
    {
      id: 6,
      name: "Editing Social media management",
      details: "Here is some editing Social media management details",
    },
    {
      id: 7,
      name: "Social media marketing ads run",
      details: "Here is some social media marketing ads run details",
    },
  ];
  return (
    <Routes>
      <Route path="/" element={<ServicesPage services={services} />} />
      <Route
        path="/services/service-details/:id"
        element={<Service services={services} />}
      />
    </Routes>
  );
};

export default App;
