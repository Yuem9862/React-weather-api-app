import React, { useState, useContext, useEffect } from "react";

const endpoint = `https://api.openweathermap.org/data/2.5/weather?`;

const WeatherContext = React.createContext();
function WeatherProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchTerm, setSearchTerm] = useState("london");
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
      const url = `${endpoint}q=${searchTerm}&appid=${process.env.REACT_APP_TEST_KEY}`;
      const response = await fetch(url);
      console.log(response);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(fetchData(searchTerm), []);

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
