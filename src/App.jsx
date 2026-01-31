import React from "react";
import Navbar from "./component/layout/Navbar";
import Background from "./component/layout/Background";
import Banner from "./component/layout/Banner";
import About from "./component/layout/About";
import Project from "./component/layout/Project";

import WorkflowProcess from "./component/layout/WorkflowProcess";

const App = () => {
  return (
    <>
      <Background></Background>
      <Navbar></Navbar>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <WorkflowProcess></WorkflowProcess>
    </>
  );
};

export default App;
