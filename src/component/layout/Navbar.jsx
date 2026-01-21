import React from "react";
import LeftNav from "../common/LeftNav";
import RightNav from "../common/RightNav";

const Navbar = () => {
  return (
    <div className="mt-5 sticky top-5 z-10 max-w-7xl mx-auto w-full">
      <div className="flex justify-between items-center py-2 px-8 bg-white/10 backdrop-blur rounded-full border border-white/20">
        <LeftNav />
        <RightNav />
      </div>
    </div>
  );
};

export default Navbar;
