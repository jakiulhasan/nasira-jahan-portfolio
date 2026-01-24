import React from "react";
import Navbar from "./component/layout/Navbar";
import Background from "./component/layout/Background";
import Banner from "./component/layout/Banner";
import About from "./component/layout/About";
import Card from "./component/ui/styled-component/Card";

const App = () => {
  return (
    <>
      <Background></Background>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Card></Card>
    </>
  );
};

export default App;
