import React from "react";
import { Button } from "reactstrap";
import Footer from "../components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <main className='section-center login'>
        <img src='../../../login-img.svg' alt='a man using a laptop' />
        <Button
          color='warning'
          className='capitalized-btn'
          onClick={() => {
            loginWithRedirect();
          }}
        >
          login / sign up
        </Button>
      </main>
      <Footer />
    </>
  );
}

export default Login;
