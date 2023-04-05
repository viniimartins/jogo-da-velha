import React from "react";
import "./App.css"

import Label from "./objects/Label";
import Header from "./components/Header"
import Hashtag from "./components/Hashtag";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Label teste="teste"/>
    </main>
  );
}

export default App;
