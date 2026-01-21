import React from "react";
import TextType from "../ui/shadcn/TextType";

const LeftNav = () => {
  return (
    <div className="text-2xl font-bold text-white">
      <TextType
        text={["NASIRA JAHAN", "UI/UX DESIGNER"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        texts={[""]}
        deletingSpeed={50}
        variableSpeedEnabled={false}
        variableSpeedMin={60}
        variableSpeedMax={120}
        cursorBlinkDuration={0.5}
      />
    </div>
  );
};

export default LeftNav;
