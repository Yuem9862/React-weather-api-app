import React from "react";
import SearchForm from "../components/SearchForm";
import WeatherList from "../components/WeatherList";

function Home() {
  return (
    <div className='section-center home'>
      <SearchForm />
      <WeatherList />
    </div>
  );
}

export default Home;
