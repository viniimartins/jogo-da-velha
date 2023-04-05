import React from "react";
import "./App.css"
import Header from "./components/Header"
import Hashtag from "./components/Hashtag";
import Label from "./objects/Label"

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Label component="Teste" />
    </main>
  );
}

export default App;
