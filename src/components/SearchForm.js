import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SearchAlert from "./Alert";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { searchTerm, setSearchTerm, weathers, setWeathers, alert, setAlert } =
    useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    //if the search term is empty, show alert
    if (!searchTerm) {
      setAlert({
        isOpen: true,
        msg: "please enter a city",
        type: "danger",
      });
    }
    //if there are over 5 search terms, show alert
    if (weathers.length > 4) {
      setAlert({
        isOpen: true,
        msg: "too many requests, please reduce one",
        type: "danger",
      });
    } else {
      const newWeather = {
        id: new Date().getTime().toString(),
        city: searchTerm,
      };
      setWeathers([...weathers, newWeather]);
    }
    setSearchTerm("");
  };

  return (
    <section className='section-center'>
      <Form className='search-form'>
        <FormGroup floating className='input'>
          <Input
            id='city'
            name='city'
            placeholder='city'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Label for='city'>City</Label>
        </FormGroup>
        <Button
          className='capitalized-btn input-submit'
          color='success'
          type='submit'
          onClick={handleSubmit}
        >
          submit
        </Button>
      </Form>
      {alert.isOpen && <SearchAlert />}
    </section>
  );
}

export default SearchForm;
