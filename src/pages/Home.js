import React from "react";
import SearchForm from "../components/SearchForm";
import WeatherList from "../components/WeatherList";

function Home() {
  return (
    <main className='section-center home'>
      <SearchForm />
      <WeatherList />
    </main>
  );
}

export default Home;
