import React from "react";

function Footer() {
  return (
    <div className='footer'>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Weather API App</span>
      </h5>
      <h5>All rights reserved</h5>
    </div>
  );
}

export default Footer;
