import React from "react";
import SearchForm from "../components/SearchForm";
import Alert from "../components/Alert";
import WeatherList from "../components/WeatherList";
function Home() {
  return (
    <div className='section-center home'>
      <h1>home</h1>
      <SearchForm />
      <Alert />
      <WeatherList />
    </div>
  );
}

export default Home;
