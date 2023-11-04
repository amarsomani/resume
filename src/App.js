import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <header className="header">
        <Heading />
      </header>
      <Main />
    </div>
  );
}

export default App;
