import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import WeatherList from "../components/WeatherList";

function Home() {
  return (
    <>
      <Navbar />
      <main className='section-center home'>
        <SearchForm />
        <WeatherList />
      </main>
      <Footer />
    </>
  );
}

export default Home;
