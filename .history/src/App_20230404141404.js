import React, { Fragment } from "react";
import Header from "./components/Header"
import Hashtag from "./components/Hashtag";
import Card from "./objects/Card"
import Player from "./objects/Player"

function App() {
  return (
    <>
      <Header />
      <Hashtag />
      {/* <Card>
        <Player player='o' />
        <Player player='x' />
        <Player player='o' />

        <Player player='o' />
        <Player player='x' />
        <Player player='o' />

        <Player player='x' />
        <Player player='o' />
        <Player player='o' />
    </Card> */}
    </>

  );
}

export default App;
