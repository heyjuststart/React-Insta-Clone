import React from 'react';

export default LoginComponent => LoggedinComponent => props => {
  if (props.loggedIn === true) {
    return <LoggedinComponent {...props} />;
  }
  return <LoginComponent {...props} />;
};
