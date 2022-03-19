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

    //if the search term is empty, show alert
    if (!searchTerm) {
      setAlert({
        isOpen: true,
        msg: "Please enter a city",
        type: "danger",
      });
    }

    // if the fetch contains error, show alert
    if (isError) {
      setAlert({
        isOpen: true,
        msg: "Error 500, please retry later",
        type: "danger",
      });
      //if there are over 9 search terms, show alert
    } else if (weathers.length > 10) {
      setAlert({
        isOpen: true,
        msg: "too many requests, please reduce one",
        type: "danger",
      });
    } else {
      //fetch data
      fetchData(searchTerm);
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
