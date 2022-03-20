import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return (
      <div className='wrapper'>
        <img src='../../../preloader.gif' alt='spinner' />
      </div>
    );
  }
  if (error) {
    return (
      <div className='wrapper'>
        <h1>{error.message}</h1>
      </div>
    );
  }
  return <>{children}</>;
}

export default AuthWrapper;
