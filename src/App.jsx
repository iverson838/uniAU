import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./components/table";
import React from "react";
import "./App.css";

const url = "http://universities.hipolabs.com/search?country=Australia";

axios.get(url).then((response) => console.log(response.data));

function App() {
  return (
    <div>
      <BasicExample />
    </div>
  );
}

export default App;
