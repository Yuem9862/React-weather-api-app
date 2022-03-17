import React from "react";
import Weather from "./Weather";
import Loading from "../components/Loading";

import { useGlobalContext } from "../context";
function WeatherList() {
  const { weathers, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }
  if (weathers.length < 1) {
    return (
      <div className='section-center error'>
        <h3>Sorry, no weather matched your search criteria.</h3>
      </div>
    );
  }
  return (
    <>
      <Weather />
    </>
  );
}

export default WeatherList;
