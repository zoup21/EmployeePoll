import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Avatar } from "@mui/material";
import NotFound from "./NotFound";
import CheckIfQuestion from "./checkIfQuestion";
import NavigationBar from "./navigationBar";
import { getExistingQuestions } from "../store/existingQuestions";

const DoneQuestions = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const answers = useSelector((state) => state.loggedUser.answers)
  const existingQuestions = useSelector(
    (state) => state.existedQuestions.questions
  );
  const shouldrefresh = useSelector(state => state.createQuestion.shouldrefresh)
  const { id } = useParams();
  const question = existingQuestions[id];
  const users = useSelector((state) => state.users.users )


  const userQuestions = users[question?.author]

  const usersLength = Object.keys(users).length;

  const isValid = CheckIfQuestion(id)



  useEffect(()=> {
    dispatch(getExistingQuestions())
  } 
  ,[dispatch, shouldrefresh])



  if(isValid){

  return (
    <>
    <NavigationBar />
      <Button onClick={() => navigate("/home")}>Back</Button>
      <h2 style={{ textAlign: "center", marginRight: "10%" }}>
        Poll by {question.author}{" "}
        <Avatar src={userQuestions.avatarURL} style={{marginLeft:'48%'}} />
      </h2>
      <h3 style={{ textAlign: "center", marginRight: "10%" }}>
        Would You Rather
      </h3>
      <TextField
        style={{ marginLeft: "20%", width: "25%" }}
        value={question.optionOne.text}
      />
      <TextField
        style={{ marginLeft: "10%", width: "25%" }}
        value={question.optionTwo.text}
      />
      <br></br>
      <Button disabled style={answers[id]==='optionOne' ? {color:'green', marginLeft:"20%"} : {color:'black', marginLeft:"20%"} }>{answers[id]==='optionOne' ? 'Voted' : ''}</Button>
      <Button disabled style={answers[id] === 'optionTwo' ? {color:'green' ,marginLeft:"31%"} : {color:'black', marginLeft:"31%"}}>{answers[id]==='optionTwo' ? 'Voted' : ''}</Button><br></br>
      <span style={{marginLeft:'20%'}}>{question.optionOne.votes.length} users has voted this Option.</span>
      <span style={{marginLeft:'25%'}}>{question.optionTwo.votes.length} users has voted this Option.</span><br></br>
      <span style={{marginLeft:'20%'}}>{(question.optionOne.votes.length / usersLength) * 100}% of users has voted this option.</span>
      <span style={{marginLeft:'25%'}}>{(question.optionTwo.votes.length / usersLength) * 100}% of users has voted this option.</span>
    </>
  )}else{
    return <NotFound />
  };
};

export default DoneQuestions;
