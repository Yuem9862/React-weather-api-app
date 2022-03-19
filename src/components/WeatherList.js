import React from "react";
import Loading from "../components/Loading";

import { useGlobalContext } from "../context";
function WeatherList() {
  const { weathers, isLoading } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {weathers.map(({ id, city, country }) => {
        return (
          <article key={id}>
            {city} {country}
          </article>
        );
      })}
    </>
  );
}

export default WeatherList;
