import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MainSection from "./components/MainSection";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=df2b0ac57d5b080102f2d5c01fd128af`
      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Error fetvhing the data");
    }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    // <>
    //   <div>
    //     {weatherData ? (
    //       <div className="">
    //         <li>Pressure: {weatherData.main.pressure} atm</li>
    //         <li>Temprature: {weatherData.main.temp} &deg;C </li>
    //       </div>
    //     ) : (
    //       <p>Loading data</p>
    //     )}
    //   </div>
    // </>

    <div className="bg-[#141316] h-screen flex flex-col justify-center items-center font-Changa ">
      <MainSection />
    </div>
  );
}

export default App;
