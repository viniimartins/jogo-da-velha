import React from "react";
import "./App.css"
import Header from "./components/Header"
import Hashtag from "./components/Hashtag";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
      <Label content="Mostrar Eventos"/>
    </main>
  );
}

export default App;
