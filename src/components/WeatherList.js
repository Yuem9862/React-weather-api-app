import React from "react";
import Loading from "../components/Loading";
import Weather from "./Weather";
import { useGlobalContext } from "../context";
import { CardGroup } from "reactstrap";

const WeatherList = () => {
  const { weathers, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <CardGroup className='weather-group'>
      {weathers
        .slice(0)
        .reverse()
        .map((weather) => {
          const { id } = weather;
          return <Weather key={id} {...weather} />;
        })}
    </CardGroup>
  );
};

export default WeatherList;
