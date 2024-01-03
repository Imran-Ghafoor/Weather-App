import React from "react";

const MiddleSection = () => {
  return (
    <div className=" mt-1 pb-1 bg-white text-black w-[280px] rounded-xl flex flex-col justify-center items-center ">
      {/* lat and long */}
      <div className="flex justify-center items-center ">
        {/* lat main div */}
        <div className="flex flex-col justify-center items-center ">
          {/* lat value */}
          <div className="text-2xl">51.5080</div>
          {/* lat title */}
          <div className="text-[10px] mt-[-5px]">Latitude</div>
        </div>
        {/* long main div */}
        <div className="flex flex-col justify-center items-center ml-[25px]  ">
          {/* long value */}
          <div className="text-2xl">-0.1257</div>
          {/* long title */}
          <div className="text-[10px] mt-[-5px]">Longitude</div>
        </div>
      </div>
      {/* sunrise and sunset */}
      <div className="flex justify-center items-center ">
        {/* sunrise main div */}
        <div className="flex flex-col justify-center items-center ">
          {/* sunrise value */}
          <div className="text-2xl">9:15 AM</div>
          {/* sunrise title */}
          <div className="text-[10px] mt-[-5px]">Sunrise</div>
        </div>
        {/* senset main div */}
        <div className="flex flex-col justify-center items-center ml-[25px] ">
          {/* sunset value */}
          <div className="text-2xl">1:15 PM</div>
          {/* sunset title */}
          <div className="text-[10px] mt-[-5px]">sunset</div>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
