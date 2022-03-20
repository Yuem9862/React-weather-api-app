import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Error() {
  return (
    <>
      <Navbar />
      <main className='section-center error'>
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
      <Footer />
    </>
  );
}

export default Error;
