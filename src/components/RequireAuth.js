import React from "react";

import { useSelector } from "react-redux";
import App from "../App";




const RequireAuth = ({component : Component}) => {
    const access = useSelector(state => state.login.access)
    
    
    

    if (!access) {
        // Redirect to the login page if not logged in
        // navigate("/");
        // Return null here to avoid rendering the protected content
        return <App />;
      }
    
      // If the user is logged in, render the protected content
      return <Component />;
    };







export default RequireAuth;