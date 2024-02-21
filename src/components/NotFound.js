import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import NavigationBar from "./navigationBar";





const NotFound = () => {
    const navigate = useNavigate();
    


    const goHomePage = () => {
        navigate("/home")
    }

  

    return(
        <>
        <NavigationBar />
        <h2>Error 404</h2>
        <h3>Not found</h3>
        <Button onClick={goHomePage}>Go to home page</Button>
        </>
    )

}




export default NotFound;