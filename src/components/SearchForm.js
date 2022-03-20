import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import SearchAlert from "./Alert";
import { useGlobalContext } from "../context";

function SearchForm() {
  const { searchTerm, setSearchTerm, weathers, alert, setAlert, fetchData } =
    useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    //search is empty
    if (!searchTerm) {
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
    if (searchTerm.includes(",")) {
      const cities = searchTerm.split(",");
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
