import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantsList,setplantsList}) {

// const ourListOfPlants = plantsList

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Does not work
  const [newPlant, setNewPlant] = useState({
    name: '',
    image: '',
    price: 0
});

//update state when user types (for onchange)
const handleChange = function(e){
  // console.log("handle change",e.targe.value)
  let xPlant = {...newPlant};
  xPlant[e.target.name]= e.target.value

  setNewPlant(xPlant);
}


//inser new plant into plants
function handleSubmit(e){
  e.preventDefault();

  setplantsList([...plantsList, newPlant]);


 
 

  
 


}

useEffect(() => {

   async function updateplantsList(newPlant) {
      let res = await fetch("http://localhost:6001/plants", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newPlant)
      });
      let data = await res.json() ;
      console.log(data);
      
  }

  updateplantsList()
  },[handleSubmit]);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Does not work end



function handleFilterPlants(e){

 let newPlantsList = plantsList.filter((el) => el.toLoverCase().includes(e.toLoverCase()))
  setplantsList(newPlantsList)
  
// console.log(newPlantsList)
}
// console.log(plantsList)



  return (
   
    <main>
      <NewPlantForm handleChange={handleChange} 
      newPlant={newPlant} 
      handleSubmit={handleSubmit}/>
      <Search handleFilterPlants={handleFilterPlants}/>
      <PlantList plantsList={plantsList}/>
    </main>
  );
}

export default PlantPage;
