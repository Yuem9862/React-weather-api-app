import React, { useRef } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SearchAlert from "./Alert";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { weathers, alert, setAlert, fetchData } = useGlobalContext();

  const inputRef = useRef(null);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchEntry = inputRef.current.value;

    //search is empty
    if (!searchEntry) {
      setAlert({
        isOpen: true,
        msg: "Please enter a city.",
        type: "danger",
      });
      return;
    }

    //if there are over 9 search terms, show alert
    if (weathers.length > 8) {
      setAlert({
        isOpen: true,
        msg: "Maximum 9 search. Please reduce one city.",
        type: "danger",
      });
      return;
    }

    //search by multiple cities or single cities
    if (searchEntry.includes(",")) {
      const cities = searchEntry.split(",");
      console.log(weathers.length, cities.length);
      if (weathers.length + cities.length > 9) {
        setAlert({
          isOpen: true,
          msg: "Too many requests. Please delete one city.",
          type: "danger",
        });
        return;
      }
      cities.forEach((city) => {
        fetchData(city.trim());
      });
    } else {
      fetchData(searchEntry);
    }

    formRef.current.reset();
  };

  return (
    <section className='section-center'>
      <Form className='search-form' innerRef={formRef}>
        <FormGroup floating className='input'>
          <Input
            id='city'
            name='city'
            type='text'
            placeholder='city'
            innerRef={inputRef}
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
};

export default SearchForm;
