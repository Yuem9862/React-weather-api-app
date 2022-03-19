import React, { useState, useContext, useEffect } from "react";

const endpoint = `https://api.openweathermap.org/data/2.5/weather?`;

const WeatherContext = React.createContext();
function WeatherProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [weathers, setWeathers] = useState([]);
  const [alert, setAlert] = useState({
    isOpen: false,
    msg: "",
    type: "",
  });

  const fetchData = async (searchTerm) => {
    //set loading
    setIsLoading(true);

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
      setIsLoading(false);
      //clean and reformat the API data
      const newWeather = {
        id: new Date().getTime().toString(),
        city: name,
        country: country,
        weather: weather[0].main,
        description: weather[0].description,
        sunrise: sunrise,
        sunset: sunset,
        temp: temp,
        icon: weather[0].icon,
      };
      setWeathers([...weathers, newWeather]);

      //log the error
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  //by default, the page will should the current weather in Toronto
  useEffect(() => {
    fetchData("toronto");
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        isLoading,
        searchTerm,
        weathers,
        alert,
        isError,
        setIsLoading,
        setSearchTerm,
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
