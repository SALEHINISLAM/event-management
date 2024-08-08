import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ServiceCard from "../../SharedComponents/ServiceCard/ServiceCard";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Services = ({ num }) => {
  const [services, setServices] = useState([]);
  const [displayServives, setDisplayServices] = useState([]);
  const [show,setShow]=useState(false);
  useEffect(() => {
    fetch("/service.json")
      .then((response) => response.json())
      .then((datum) => setServices(datum.events));
  }, []);
  useEffect(() => {
    if (num) {
      setDisplayServices(services.slice(0, num));
      setShow(true)
    } else {
      setDisplayServices(services);
      setShow(false);
    }
  }, [num, services]);
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-10">
      <h1 className="text-5xl font-bold text-center">Services</h1>
      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {displayServives.map((service, index) => (
          <ServiceCard key={index} service={service} index={index}/>
        ))}
      </div>
      <div>
        {
            show && <Button><Link to={`/services`}>Show All Services</Link></Button>
        }
      </div>
    </div>
  );
};

Services.propTypes = {
  num: PropTypes.number,
};

export default Services;
