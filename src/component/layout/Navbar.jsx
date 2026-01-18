import React from "react";
import LeftNav from "../common/LeftNav";
import RightNav from "../common/RightNav";

const Navbar = () => {
  return (
    <div className="shadow-sm py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <LeftNav />
        <RightNav />
      </div>
    </div>
  );
};

export default Navbar;
