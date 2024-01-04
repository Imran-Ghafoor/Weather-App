import React from "react";

const LowerSection = ({ status, pressure, humidity, windspeed }) => {
  return (
    <div className=" w-[380px] mt-3 flex flex-col justify-center items-center">
      {/* weather status */}
      <div className="border-2 w-[380px]  rounded-lg text-4xl text-center ">
        {status}
      </div>
      {/* pressure humidity and windSpeed */}
      <div className=" mt-3 pb-1 rounded-lg w-[380px] bg-white text-black flex justify-center items-center">
        {/* pressure */}
        <div className="flex flex-col justify-center items-center">
          {/* pressure value */}
          <div className="text-[30px]">{pressure}</div>
          {/* pressure tittle */}
          <div className="text-[13px]  mt-[-3px]"> pressure</div>
        </div>
        {/* humidity */}
        <div className="flex flex-col justify-center items-center mx-5">
          {/* humidity value */}
          <div className="text-[30px]">{humidity}%</div>
          {/* humidity title */}
          <div className="text-[13px] mt-[-3px]">humidity</div>
        </div>
        {/* wind speed */}
        <div className="flex flex-col justify-center items-center">
          {/* wind value */}
          <div className="text-[30px]">{windspeed}km/h</div>
          {/* wind tittle */}
          <div className="text-[13px] mt-[-3px]">wind Speed</div>
        </div>
      </div>
    </div>
  );
};

export default LowerSection;
