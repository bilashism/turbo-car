import React, { useState } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/services?order=${isAsc ? "des" : "asc"}`)
      .then(res => res.json())
      .then(data => {
        setServices(data);
      })
      .catch(err => console.error(err));
  }, [isAsc]);

  return (
    <div className="py-5">
      <div className="text-center">
        <p className="">Services</p>
        <h2 className="">Lorem, ipsum dolor.</h2>
        <p className="">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo optio
          blanditiis suscipit necessitatibus ex eos voluptate facilis accusamus
          sit odit odio, ipsum minima excepturi quo eius vel, nam libero.
          Incidunt.
        </p>
      </div>
      <div className="">
        <h2 className="">Services: {services.length}</h2>
        <div className="py-4">
          {" "}
          <button
            type="button"
            className="btn btn-ghost bg-purple-300"
            onClick={() => setIsAsc(!isAsc)}>
            Sort by {isAsc ? "descending" : "ascending"}{" "}
          </button>{" "}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
