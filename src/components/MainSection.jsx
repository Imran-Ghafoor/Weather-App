import React from "react";
import UpperSection from "./UpperSection";
import MiddleSection from "./MiddleSection";
import LowerSection from "./LowerSection";

const MainSection = ({ place, data }) => {
  return (
    <div className="text-white w-[450px] h-[510px]   rounded-2xl bg-background bg-cover flex flex-col justify-start items-center font-changa  ">
      <UpperSection place={place} temp={Math.round(data?.main?.temp - 273)} />
      <MiddleSection
        lat={data?.coord?.lat}
        lon={data?.coord?.lon}
        sunrise={data?.sys?.sunrise}
        sunset={data?.sys?.sunset}
      />
      <LowerSection
        status={data?.weather[0]?.description}
        pressure={data?.main?.pressure}
        humidity={data?.main?.humidity}
        windspeed={data?.wind?.speed}
      />
    </div>
  );
};

export default MainSection;
