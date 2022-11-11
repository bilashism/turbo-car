import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const searchRef = useRef();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:5000/services?search=${searchValue}&order=${
        isAsc ? "des" : "asc"
      }`
    )
      .then(res => res.json())
      .then(data => {
        setServices(data);
      })
      .catch(err => console.error(err));
  }, [isAsc, searchValue]);

  const handleSearch = () => {
    setSearchValue(searchRef.current.value);
  };

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
        <div className="py-4 flex flex-wrap gap-8 items-start justify-between">
          <div className="">
            <input
              type="search"
              name="search"
              ref={searchRef}
              placeholder="search now"
            />
            <button
              type="button"
              className="btn btn-ghost bg-blue-300"
              onClick={handleSearch}>
              Search
            </button>
          </div>
          <button
            type="button"
            className="btn btn-ghost bg-purple-300"
            onClick={() => setIsAsc(!isAsc)}>
            Sort by {isAsc ? "descending" : "ascending"}
          </button>
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
