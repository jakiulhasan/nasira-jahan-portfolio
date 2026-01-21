import React from "react";
import DownloadBtn from "../ui/styled-component/DownloadBtn";
import ViewBtn from "../ui/styled-component/ViewBtn";
import { Sparkles } from "lucide-react";
import GreenDivider from "./GreenDivider";

const BannerLeft = () => {
  return (
    <div className="flex-1 space-y-6 animate-fade-in">
      {/* Title Section */}
      <div className="">
        <h3 className="text-lg  md:text-4xl tracking-[10px] font-semibold text-blue-400 animate-slide-right">
          Junior
        </h3>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent leading-tight animate-slide-up">
          UI/UX DESIGNER
        </h1>
      </div>

      <GreenDivider />

      {/* Description */}
      <div className="space-y-3 animate-fade-in-delay">
        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
          I design clean, user-friendly interfaces with a strong focus on
          usability and clarity.
        </p>
      </div>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm animate-slide-down">
        <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
        <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Open to internships & junior roles
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 pt-4 animate-slide-up-delay">
        <ViewBtn />
        <DownloadBtn />
      </div>
    </div>
  );
};

export default BannerLeft;
