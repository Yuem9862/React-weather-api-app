import React, { useState, useContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const endpoint = `https://api.openweathermap.org/data/2.5/weather?`;

const WeatherContext = React.createContext();
function WeatherProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [weathers, setWeathers] = useState([]);
  const [alert, setAlert] = useState({
    isOpen: false,
    msg: "",
    type: "",
  });

  const fetchData = async (searchTerm) => {
    //set loading
    setLoading(true);

    //fetch the data
    try {
      const url = `${endpoint}q=${searchTerm}&appid=${process.env.REACT_APP_TEST_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      const {
        name,
        weather,
        main: { temp },
        sys: { country, sunrise, sunset },
      } = data;
      setLoading(false);

      //clean and reformat the API data
      const newWeather = {
        id: uuidv4(),
        city: name,
        country: country,
        weather: weather[0].main,
        description: weather[0].description,
        sunrise: sunrise,
        sunset: sunset,
        temp: temp,
        icon: weather[0].icon,
      };
      setWeathers((oldWeathers) => {
        return [...oldWeathers, newWeather];
      });

      //log the error
    } catch (error) {
      setIsError(true);
      setAlert({
        isOpen: true,
        msg: "Cannot find the city, please try it again",
        type: "danger",
      });
      setLoading(false);
    }
  };

  //by default, show 3 weathers
  useEffect(() => {
    fetchData("Rosario");
    fetchData("Montevideo");
    fetchData("San Francisco");
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        loading,
        weathers,
        alert,
        isError,
        setLoading,
        setWeathers,
        setAlert,
        setIsError,
        fetchData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

function useGlobalContext() {
  return useContext(WeatherContext);
}
export { WeatherProvider, useGlobalContext };
