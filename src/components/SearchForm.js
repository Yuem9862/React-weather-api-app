import React, { useEffect } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SearchAlert from "./Alert";
import { useGlobalContext } from "../context";

function SearchForm() {
  const {
    searchTerm,
    setSearchTerm,
    weathers,
    alert,
    setAlert,
    isError,
    fetchData,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    //search is empty
    if (!searchTerm) {
      setAlert({
        isOpen: true,
        msg: "Please enter a city",
        type: "danger",
      });
    }

    //search by multiple cities
    if (searchTerm.includes(",")) {
      const cities = searchTerm.split(",");
      cities.forEach((city) => {
        fetchData(city.trim());
      });
    } else {
      fetchData(searchTerm);
    }

    //search by single cities
    if (weathers.length > 10) {
      //if there are over 9 search terms, show alert
      setAlert({
        isOpen: true,
        msg: "too many requests, please reduce one",
        type: "danger",
      });
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
