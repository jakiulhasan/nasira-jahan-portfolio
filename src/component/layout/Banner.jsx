import React from "react";
import BannerLeft from "../common/BannerLeft";
import BannerRight from "../common/BannerRight";

const Banner = () => {
  return (
    <div
      id="home"
      className="flex max-w-7xl my-10 mx-auto justify-center items-center gap-10 px-5"
    >
      <BannerLeft className="flex-1 w-full"></BannerLeft>
      <BannerRight className="flex-1 w-full"></BannerRight>
    </div>
  );
};

export default Banner;
