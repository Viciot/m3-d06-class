import React from 'react';
import { Route, Redirect } from 'react-router-dom';
 
function ProtectedRoute(props) {

  const { component: Component, user, path, ...rest} = props
  // This is the long way of renaming const Component = props.component
  
  console.log({ component: Component, user, path });
 
  if (user) {
    return <Route path={path} render={routeProps => <Component {...routeProps} loggedInUser={user} />} />;
  } else {
    return <Redirect to={{ pathname: '/', state: { from: rest.location } }} />;
  }
};
 
export default ProtectedRoute;

// This component will be imported and used inside the router in App.js