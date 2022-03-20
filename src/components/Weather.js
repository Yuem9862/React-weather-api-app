import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { useGlobalContext } from "../context";

const Weather = ({ country, city, weather, temp, icon, id }) => {
  const { weathers, setWeathers, setAlert } = useGlobalContext();

  const handleDelete = (e) => {
    if (weathers.length === 1) {
      setAlert({
        isOpen: true,
        msg: "please enter a city",
        type: "danger",
      });
    }
    const removeID = e.target.parentElement.parentElement.parentElement.id;
    const keepWeathers = weathers.filter((weather) => {
      return weather.id !== removeID;
    });
    setWeathers(keepWeathers);
  };

  return (
    <Card id={id} className='weather-card' style={{ borderRadius: "0.25rem" }}>
      <CardImg
        top
        width='100%'
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt='weather icon'
        className='weather-icon'
      />
      <CardBody className='weather-info'>
        <CardTitle>
          {city}, {country} - {weather}
        </CardTitle>
        <CardText>{temp} °C</CardText>
        <div className='buttons'>
          <Button outline className='more' tag={Link} to={`/city/${id}`}>
            Learn More
          </Button>
          <Button type='button' outline onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default React.memo(Weather);
