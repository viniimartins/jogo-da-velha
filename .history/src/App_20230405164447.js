import React from "react";
import "./App.css"

import Header from "./components/Header"
import Hashtag from "./components/Hashtag";
import CheckBox from "./objects/CheckBox";
import Input from "./objects/Input";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <CheckBox id="show" value="show" content="Mostrar eventos" type="checkbox" />
      <Input  type="text"/>
    </main>
  );
}

export default App;
