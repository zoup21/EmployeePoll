import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink } from "react-router-dom";


function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }


const NavigationBar = () => {
    const [value, setValue] = React.useState(0);


    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

        return(
            <>
               <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab
          component={NavLink}
          to="/home"
          style={{ textTransform: "none" }}
          label="Home"
          {...a11yProps(0)}
        />
        <Tab
          component={NavLink}
          to="/leaderboard"
          style={{ textTransform: "none" }}
          label="Leaderboard"
          {...a11yProps(1)}
        />
        <Tab
          component={NavLink}
          to="/add"
          style={{ textTransform: "none" }}
          label="New"
          {...a11yProps(2)}
        />
      </Tabs></>
        )

}





export default NavigationBar;