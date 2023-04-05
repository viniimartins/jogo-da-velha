import React from "react";
import "./app.css"
import Header from "./components/Header"
import Hashtag from "./components/Hashtag";

const App = () => {
  return (
    <main className="app">
      <Header />
      <Hashtag />
    </main>
  );
}

export default App;
