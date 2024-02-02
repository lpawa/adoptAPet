import React from "react"
import ReactDOM from "react-dom";

import Pet from "./Pet.jsx"
import SearchParams from "./SearchParams.jsx";

const App = () => {
  return <div>
    <h1>Adopt a Pet!</h1>
    <SearchParams/>
    {/* <Pet name="Luna" animal="dog" breed="Havanese"/>
    <Pet name="Pepper" animal="bird" breed="Cockatiel"/>
    <Pet name="Doink" animal="cat" breed="Mixed"/> */}
  </div>
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App/>);
