import React from "react";
import Button from "../ui/styled-component/Button";

const RightNav = () => {
  return (
    <div className="flex gap-5 justify-center items-center text-white font-bold">
      <ul className="flex gap-5 ">
        <li className="cursor-pointer">
          {" "}
          <a href="#home">Home</a>
        </li>
        <li className="cursor-pointer">
          {" "}
          <a href="#about">About</a>
        </li>
        <li className="cursor-pointer">
          {" "}
          <a href="#experience">Exprience</a>
        </li>
        <li className="cursor-pointer">
          {" "}
          <a href="#service">Service</a>
        </li>
      </ul>
      <Button></Button>
    </div>
  );
};

export default RightNav;
