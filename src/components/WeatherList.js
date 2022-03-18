import React from "react";
import Weather from "./Weather";
import Loading from "../components/Loading";

import { useGlobalContext } from "../context";
function WeatherList() {
  const { weathers, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {weathers.map((weather) => {
        const { id } = weather;
        return <Weather key={id} {...weather} />;
      })}
    </>
  );
}

export default WeatherList;
