import React from "react";
import TextType from "../shadcn/TextType";

const LeftNav = () => {
  return (
    <div className="text-2xl font-bold">
      <TextType
        text={["NASIRA JAHAN", "UI/UX DESIGNER"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor
        cursorCharacter="_"
        texts={[
          "Welcome to React Bits! Good to see you!",
          "Build some amazing experiences!",
        ]}
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
