import React from "react";
import Button from "../styled-component/Button";

const RightNav = () => {
  return (
    <div className="flex gap-5 justify-center items-center text-white font-bold">
      <ul className="flex gap-5 cursor-pointer">
        <li>Home</li>
        <li>About</li>
        <li>Exprience</li>
        <li>Service</li>
      </ul>
      <Button></Button>
    </div>
  );
};

export default RightNav;
