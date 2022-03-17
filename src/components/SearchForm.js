import React from "react";
import { Form, Label, Input, Button } from "reactstrap";

import { useGlobalContext } from "../context";

function SearchForm() {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  return (
    <div className='section-center'>
      <Form className='search-form'>
        <Input id='city' name='city' placeholder='city' className='input' />
        <Label for='city' hidden>
          City
        </Label>
        <Button className='capitalized-btn input-submit' color='success'>
          submit
        </Button>
      </Form>
    </div>
  );
}

export default SearchForm;
