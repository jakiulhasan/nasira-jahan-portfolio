import React from "react";
import GridDistortion from "../ui/GridDistortion";
import heroImg from "/Hero.png";

const BannerRight = () => {
  return (
    <div className="flex-1 h-100 w-full">
      <GridDistortion
        imageSrc={heroImg}
        grid={10}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
        className="h-full w-full rounded-3xl"
      />
    </div>
  );
};

export default BannerRight;
