import React from "react";

const MiddleSection = ({ lat, lon, sunrise, sunset }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const options = { hour: "numeric", minute: "numeric" };
    return date.toLocaleTimeString([], options);
  };
  return (
    <div className=" mt-3 pb-1 bg-white text-black w-[380px] rounded-xl flex flex-col justify-center items-center ">
      {/* lat and long */}
      <div className="flex justify-center items-center ">
        {/* lat main div */}
        <div className="flex flex-col justify-center items-center ">
          {/* lat value */}
          <div className="text-3xl">{lat}</div>
          {/* lat title */}
          <div className="text-[15px] mt-[-5px]">Latitude</div>
        </div>
        {/* long main div */}
        <div className="flex flex-col justify-center items-center ml-[40px] mt-1  ">
          {/* long value */}
          <div className="text-3xl">{lon}</div>
          {/* long title */}
          <div className="text-[15px] mt-[-5px]">Longitude</div>
        </div>
      </div>
      {/* sunrise and sunset */}
      <div className="flex justify-center items-center ">
        {/* sunrise main div */}
        <div className="flex flex-col justify-center items-center ">
          {/* sunrise value */}
          <div className="text-3xl">{formatTime(sunrise)}</div>
          {/* sunrise title */}
          <div className="text-[15px] mt-[-5px]">Sunrise</div>
        </div>
        {/* senset main div */}
        <div className="flex flex-col justify-center items-center ml-[40px] ">
          {/* sunset value */}
          <div className="text-3xl">{formatTime(sunset)}</div>
          {/* sunset title */}
          <div className="text-[15px] mt-[-5px]">sunset</div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
