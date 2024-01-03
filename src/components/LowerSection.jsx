import React from "react";

const LowerSection = () => {
  return (
    <div className=" w-[280px] mt-3 flex flex-col justify-center items-center">
      {/* weather status */}
      <div className="border-2 w-[280px]  rounded-lg text-2xl text-center ">
        BROKEN CLOUDS
      </div>
      {/* pressure humidity and windSpeed */}
      <div className=" mt-3 pb-1 rounded-lg w-[280px] bg-white text-black flex justify-center items-center">
        {/* pressure */}
        <div className="flex flex-col justify-center items-center">
          {/* pressure value */}
          <div className="text-[23px]">1011</div>
          {/* pressure tittle */}
          <div className="text-[11px]  mt-[-10px]"> pressure</div>
        </div>
        {/* humidity */}
        <div className="flex flex-col justify-center items-center mx-4">
          {/* humidity value */}
          <div className="text-[23px]">23%</div>
          {/* humidity title */}
          <div className="text-[11px] mt-[-10px]">humidity</div>
        </div>
        {/* wind speed */}
        <div className="flex flex-col justify-center items-center">
          {/* wind value */}
          <div className="text-[23px]">1.45km/h</div>
          {/* wind tittle */}
          <div className="text-[11px] mt-[-10px]">wind Speed</div>
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
