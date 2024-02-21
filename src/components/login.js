import React from "react";
import { Button, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { LoginActions } from "../store/loginSlice";
import { loggedUserActions } from "../store/loggedUser";


const Login = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.login.name);
  const password = useSelector((state) => state.login.password);
  const users = useSelector((state) => state.users.users);
 

  // const {from} = location.state || {from : {pathname : '/'}}
 
  


  const updateName = (e) => {
    dispatch(LoginActions.updateName(e.target.value));
  };

  const updatePassword = (e) => {
    dispatch(LoginActions.password(e.target.value));
  };

  const LoginPage = (e) => {
    e.preventDefault();
    for (const user of Object.values(users)) {
      if (user.id === name && user.password === password) {
        dispatch(LoginActions.login(true));
        dispatch(
          loggedUserActions.loggedUser(
            [user.id , user.password , user.name , user.answers , user.questions, user.avatarURL]
          )
        );
          }
          
    }
  };


  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={LoginPage}>
        <label data-testid='name'>User</label>
        <br></br>
        <TextField  value={name} onChange={updateName} />
        <br></br>
        <label data-testid='password'>Password</label>
        <br></br>
        <TextField  value={password} onChange={updatePassword} />
        <br></br>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default Login;
