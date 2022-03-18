import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
function Error() {
  return (
    <>
      <main className='section-center'>
        <h3>Oops! It's a dead end...</h3>
        <Button
          tag={Link}
          to='/'
          color='warning'
          outline
          className='capitalized-btn'
        >
          Return
        </Button>
      </main>
    </>
  );
}

export default Error;
