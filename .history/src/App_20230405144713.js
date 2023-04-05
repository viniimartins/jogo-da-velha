import React from "react";
import "./App.css"
import Header from "./components/Header"
import Hashtag from "./components/Hashtag";
import Label from "../src/objects/Label"

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
    </main>
  );
}

export default App;
