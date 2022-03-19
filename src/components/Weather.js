import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const Weather = ({ country, city, weather }) => {
  const random = Math.floor(Math.random() * 10) + 1050;
  console.log(city);
  return (
    <Card className='weahter-card' style={{ borderRadius: "0.25rem" }}>
      <CardImg
        alt={city}
        src={`https://picsum.photos/id/${random}/318/180`}
        top
        width='100%'
      />
      <CardBody className='weather-info'>
        <CardTitle>
          {city}, {country}
        </CardTitle>
        <CardText>{weather} </CardText>
        <div className='buttons'>
          <Button outline>Learn More</Button>
          <Button outline>Close</Button>
        </div>
      </CardBody>
    </Card>
  );
};

//while using context API, use React.memo to reduce unnecessary re-rendering
export default React.memo(Weather);
