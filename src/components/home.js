import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import ExistingQuestions from "./existingQuestions";
import CreateQuestion from "./createQuestion";
import { Avatar, Button } from "@mui/material";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { LoginActions } from "../store/loginSlice";
import Leaderboard from "./leaderboard";
import { loggedUserActions } from "../store/loggedUser";
import { useEffect } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <span>{children}</span>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = React.useState(0);
  const avatarURL = useSelector((state) => state.loggedUser.avatarURL); //id of the logged user
  const name = useSelector((state) => state.loggedUser.name);
  const location = useLocation()
 
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  useEffect(() => {
    // Get the current path from the location object
    const currentPath = location.pathname;

    // Map the paths to their corresponding tab indices
    const pathToTabIndex = {
      "/home": 0,
      "/leaderboard": 1,
      "/add": 2,
    };

    // Set the "value" state based on the current path
    setValue(pathToTabIndex[currentPath] || 0);
  }, [location.pathname]);

  // ... remaining code ...


  return (
    <>
      <div
        style={{
          width: "50px",
          position: "absolute",
          right: "0",
          marginRight: "10%",
        }}
      >
        <Avatar src={avatarURL} />
        {name}
      </div>
      <Button onClick={() => {dispatch(LoginActions.login(false)); dispatch(loggedUserActions.currentLocation(location.pathname)); navigate(".") }} data-testid='logout'>Logout</Button>
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
      </Tabs>
      <CustomTabPanel value={value} index={0}>
        <ExistingQuestions />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Leaderboard />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <CreateQuestion />
      </CustomTabPanel>
    </>
  );
};

export default Home;