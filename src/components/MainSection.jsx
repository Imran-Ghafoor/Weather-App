import React from "react";
import UpperSection from "./UpperSection";
import MiddleSection from "./MiddleSection";
import LowerSection from "./LowerSection";

const MainSection = () => {
  return (
    <div className="text-white w-[360px] h-[420px] border rounded-2xl bg-background bg-cover flex flex-col justify-start items-center font-changa ">
      <UpperSection />
      <MiddleSection />
      <LowerSection />
    </div>
  );
};

export default MainSection;
