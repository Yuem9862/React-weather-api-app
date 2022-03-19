import React from "react";
import { useGlobalContext } from "../context";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
function SingleWeather() {
  const { weathers } = useGlobalContext();
  const { id } = useParams();

  //information on the page
  const singleWeather = weathers.filter((weather) => weather.id === id);
  console.log(singleWeather[0]);
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

  console.log(sunriseMinutes);
  return (
    <main className='section-center city-page'>
      <Card>
        <CardBody>
          <CardTitle tag='h2'>{city}</CardTitle>
          <CardSubtitle className='mb-2 text-muted' tag='h4'>
            {country}
          </CardSubtitle>
        </CardBody>
        <img alt='decorative image' src='https://picsum.photos/640/360' />
        <CardBody>
          <CardText>
            🥞 Sunrise: {sunriseHours}:{sunriseMinutes}:{sunriseSeconds} AM 📘
            Sunrise: {sunsetHours}:{sunsetMinutes}:{sunsetSeconds} PM
          </CardText>
          <CardText>🌱 Current weather: {description}.</CardText>
          <Button tag={Link} to='/' color='warning' className='capitalized-btn'>
            Return
          </Button>
        </CardBody>
      </Card>
    </main>
  );
}

export default SingleWeather;
