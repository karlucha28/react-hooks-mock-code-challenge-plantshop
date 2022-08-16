import React, {useState} from "react";

function PlantCard({plant}) {

const [stockOfPlant,setstockOfPlant] = useState(true);

function handleClickStock() {
  setstockOfPlant((stockOfPlant)=>!stockOfPlant);
}





  const {id, name ,image ,price}=plant
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stockOfPlant ? (
        <button className="primary" onClick={handleClickStock}>In Stock</button>
      ) : (
        <button onClick={handleClickStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
