import React from "react";
import { useGlobalContext } from "../context";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  CardText,
  Button,
} from "reactstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SingleWeather() {
  const { weathers } = useGlobalContext();
  const { id } = useParams();

  //information on the page
  const singleWeather = weathers.filter((weather) => weather.id === id);
  const { city, country, description, sunrise, sunset } = singleWeather[0];

  //format the Unix time
  const sunriseDate = new Date(sunrise * 1000);
  const sunriseHours = sunriseDate.getHours();
  const sunriseMinutes = sunriseDate.getMinutes();
  const sunriseSeconds = sunriseDate.getSeconds();
  const sunsetDate = new Date(sunset * 1000);
  const sunsetHours = sunsetDate.getHours();
  const sunsetMinutes = sunsetDate.getMinutes();
  const sunsetSeconds = sunsetDate.getSeconds();

  return (
    <>
      <Navbar />

      <main className='section-center city-page'>
        <Card>
          <CardBody>
            <CardTitle tag='h2'>{city}</CardTitle>
            <CardSubtitle className='mb-2 text-muted' tag='h4'>
              {country}
            </CardSubtitle>
          </CardBody>
          <CardImg alt='decorative image' src='https://picsum.photos/640/360' />
          <CardBody>
            <CardText>
              📍 In user's time zone -- 🥞 Sunrise: {sunriseHours}:
              {sunriseMinutes}:{sunriseSeconds} 📘 Sunset: {sunsetHours}:
              {sunsetMinutes}:{sunsetSeconds}
            </CardText>
            <CardText>🌱 Current weather: {description}.</CardText>
            <Button
              tag={Link}
              to='/'
              color='warning'
              className='capitalized-btn'
            >
              Return
            </Button>
          </CardBody>
        </Card>
      </main>
      <Footer />
    </>
  );
}

export default SingleWeather;
