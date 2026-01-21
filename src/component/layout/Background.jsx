import React from "react";
import DarkVeil from "../ui/DarkVeil";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-99">
      <DarkVeil
        hueShift={0}
        noiseIntensity={0}
        scanlineIntensity={0}
        speed={0.5}
        scanlineFrequency={0}
        warpAmount={0}
      />
    </div>
  );
};

export default Background;
