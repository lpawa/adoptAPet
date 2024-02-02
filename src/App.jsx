import React from "react";
import ReactDOM from "react-dom";

import SearchParams from "./SearchParams.jsx";

const App = () => {
  return (
    <div>
      <h1>Adopt a Pet!</h1>
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
