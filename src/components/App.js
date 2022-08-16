import React, {useState, useEffect}from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";


const API = "http://localhost:6001/plants"

function App() {
const [plantsList, setplantsList] = useState([]);


  useEffect(() => {
    fetch(API)
      .then ((response) => response.json())
      .then(data => setplantsList(data))
      console.log(plantsList)
  },[]);

  return (
    <div className="app">
      <Header />
      <PlantPage plantsList={plantsList} setplantsList={setplantsList}/>
    </div>
  );
}

export default App;
