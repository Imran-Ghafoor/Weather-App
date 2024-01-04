import React from "react";

const UpperSection = ({ place, temp }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDay();
  return (
    <div className="flex flex-col justify-center items-center mt-3">
      {/* UpperSecion place */}
      <div className="text-7xl ">{place}</div>
      {/* UpperSecion temprature */}
      <div className="text-9xl ">{temp}&deg;C</div>
      {/* UpperSecion date */}
      <div className="text-3xl mt-[-10px]">{[year, month, day].join("-")}</div>
    </div>
  );
};

export default UpperSection;
