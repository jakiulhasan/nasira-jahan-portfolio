import React from "react";
import Navbar from "./component/layout/Navbar";
import Background from "./component/layout/Background";

const App = () => {
  return (
    <>
      <Background></Background>
      <div className="relative">
        <Navbar></Navbar>
      </div>
    </>
  );
};

export default App;
