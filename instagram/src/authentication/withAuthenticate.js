import React from 'react';

export default LoginComponent => LoggedinComponent => props => {
  if(localStorage.getItem('username')) {
    return <LoggedinComponent {...props} />;
  }

  return <LoginComponent {...props} />;
};
