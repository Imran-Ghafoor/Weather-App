import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import MainSection from "./components/MainSection";
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [bgchange, setBgChange] = useState("");

  const fetchData = async () => {
    const apikey = "df2b0ac57d5b080102f2d5c01fd128af";
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`
      );
      setWeatherData(res.data);
      setSubmitted(true);
      console.log(res.data);
    } catch (error) {
      console.log("Error fetching the data");
    }
  };
  return (
    <div className="font-changa text-center text-5xl bg-[#141316] text-white text-orange-500 pt-5 ">
      <h1>Weather Status</h1>

      <div className="bg-[#141316] h-screen flex flex-col justify-center items-center font-Changa ">
        <div className="mb-3 w-[500px] text-[25px] font-changa flex justify-center items-center">
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-3 w-[70%] outline-none border-none rounded-md"
          />
          <button
            type="submit"
            className="py-3 bg-blue-800 text-white font-changa w-[28%] outline-none border-none rounded-md"
            onClick={() => fetchData()}
          >
            SUBMIT
          </button>
        </div>

        {submitted ? (
          location ? (
            <MainSection place={location} data={weatherData} />
          ) : (
            <p className="text-red-400">
              <sup>*</sup>Please enter your Location
            </p>
          )
        ) : null}
      </div>
    </div>
  );
}

export default App;
