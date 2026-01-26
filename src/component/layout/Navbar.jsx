import React, { useEffect, useState } from "react";
import LeftNav from "../common/LeftNav";
import RightNav from "../common/RightNav";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full flex justify-center">
      {/* OUTER BOX: This handles the background morphing. 
          The width and height are animated, but the content inside stays centered.
      */}
      <div
        className={`
          transition-all duration-500 ease-in-out
          bg-white/10 backdrop-blur-md border border-white/20
          flex justify-center
          ${
            scrolled
              ? "w-full mt-0 rounded-none border-x-0 py-2"
              : "w-[95%] max-w-7xl mt-5 rounded-full py-3"
          }
        `}
      >
        {/* INNER BOX: This stays constant. 
            The content is always constrained to max-w-7xl.
        */}
        <div className="w-full max-w-7xl px-8 flex justify-between items-center">
          <LeftNav />
          <RightNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
