import React from "react";
import { Link } from "react-router-dom";



const DogList = ({dogs}) => {

  return (
    <div>
      <h1>Dog List</h1>
      {dogs.map((dog, index) => (
        <div key={index}>
          <h4><Link to={`/dogs/${dog.name}`}>{dog.name}</Link></h4>
          <img src={dog.src} alt={dog.name} />
        </div>
      ))}
    </div>
  );
};
export default DogList;