import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./components/table";
import React, { useState } from "react";
import "./App.css";
import AxiosAPI from "./components/axios";

function App() {
  return (
    <div>
      <BasicExample />
      <AxiosAPI />
    </div>
  );
}

export default App;
