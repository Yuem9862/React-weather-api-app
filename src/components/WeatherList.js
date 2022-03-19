import React from "react";
import Loading from "../components/Loading";
import Weather from "./Weather";
import { useGlobalContext } from "../context";
import { CardGroup } from "reactstrap";

const WeatherList = () => {
  const { weathers, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CardGroup className='weather-group'>
      {weathers.map((weather) => {
        const { id } = weather;
        return <Weather key={id} {...weather} />;
      })}
    </CardGroup>
  );
};

export default WeatherList;
