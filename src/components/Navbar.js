import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <>
      <nav className='section-center'>
        <div className='navbar'>
          <Link to='/' className='logo'>
            Weather API App
          </Link>
          <div className='buttons'>
            {/* user photo */}
            {isUser && user.picture && (
              <img className='user-img' src={user.picture} alt={user.name} />
            )}
            {/* end of user photo */}
            {/* login and logout */}
            {isUser ? (
              <Button
                type='button'
                color='danger'
                className='capitalized-btn'
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}
              >
                Logout
              </Button>
            ) : (
              <Button
                type='button'
                color='danger'
                className='capitalized-btn'
                onClick={loginWithRedirect}
              >
                Login
              </Button>
            )}
            {/* end of login and logout */}
            <Button
              tag={Link}
              to='/about'
              color='primary'
              className='capitalized-btn'
            >
              About
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
