import React from "react";

function NewPlantForm({handleChange, newPlant, handleSubmit}) {
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onChange={handleChange}>
        <input type="text" name={newPlant.name} placeholder="Plant name" />
        <input type="text" name={newPlant.image} placeholder="Image URL" />
        <input type="number" name={newPlant.price} step="0.01" placeholder="Price" />
        <button type="submit" handleSubmit={() => handleSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
