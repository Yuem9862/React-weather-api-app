import React, { useState, useContext } from "react";

// const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}appid=${process.env.REACT_APP_TEST_KEY}`;

const WeatherContext = React.createContext();
function WeatherProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [weathers, setWeathers] = useState([]);
  return (
    <WeatherContext.Provider
      value={{
        isLoading,
        searchTerm,
        weathers,
        setIsLoading,
        setSearchTerm,
        setWeathers,
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
