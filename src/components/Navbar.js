import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className='section-center'>
        <div className='navbar'>
          <Link to='/' className='logo'>
            Weather API App
          </Link>
          <div className='buttons'>
            <Button type='button' color='danger' className='capitalized-btn'>
              Login
            </Button>
            <Button tag={Link} to='/about' className='capitalized-btn'>
              About
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
