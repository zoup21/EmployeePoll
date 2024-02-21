import { Button, TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SaveAnswerActions, saveAnswer } from "../store/saveAnswerSlice";
import { createQuestionActions } from "../store/createQuestionSlice";
import { loggedUserActions } from "../store/loggedUser";
import { Avatar } from "@mui/material";


import CheckIfQuestion from "./checkIfQuestion";
import NotFound from "./NotFound";
import NavigationBar from "./navigationBar";

const ShowQuestion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.loggedUser.id);
  const authedUser = useSelector((state) => state.saveAnswer.authedUser);
  const qid = useSelector((state) => state.saveAnswer.qid);
  const answerOne = useSelector((state) => state.saveAnswer.answerOne);
  const answerTwo = useSelector((state) => state.saveAnswer.answerTwo);
  const { id } = useParams();
  const existingQuestions = useSelector(
    (state) => state.existedQuestions.questions
  );
  const users = useSelector((state) => state.users.users);

  const question = existingQuestions[id];

  const userQuestions = question?.author ? users[question?.author] : "";

  const optionOne = () => {
    // dispatch(loggedUserActions.addQuestions(answerOne));
    dispatch(loggedUserActions.addQuestions({ qid, answer: answerOne }));
    dispatch(saveAnswer(authedUser, qid, answerOne));
    dispatch(createQuestionActions.refresh())
    navigate(`/question/done/${id}`);

  };

  
  

  const optionTwo = () => {
    dispatch(loggedUserActions.addQuestions({ qid, answer: answerTwo }));
    dispatch(saveAnswer(authedUser, qid, answerTwo));
    setTimeout(() => navigate(`/question/done/${id}`), 1000);
  };


  const isValid = CheckIfQuestion(id)




  useEffect(() => {
    
      dispatch(SaveAnswerActions.authedUser(name));
      dispatch(SaveAnswerActions.questionId(id));
    
  });






  if (isValid) {
    return (
      <>
      <NavigationBar />
        <Button onClick={() => navigate("/home")}>Back</Button>
        <h2 style={{ textAlign: "center", marginRight: "10%" }}>
          Poll by {question?.author}
          <Avatar src={userQuestions.avatarURL} style={{ marginLeft: "48%" }} />
        </h2>
        <h3 style={{ textAlign: "center", marginRight: "10%" }}>
          Would You Rather
        </h3>
        <TextField
          style={{ marginLeft: "20%", width: "25%" }}
          value={question?.optionOne.text}
        />
        <TextField
          style={{ marginLeft: "10%", width: "25%" }}
          value={question?.optionTwo.text}
        />
        <br></br>
        <Button style={{ marginLeft: "20%" }} onClick={optionOne}>
          Click
        </Button>
        <Button style={{ marginLeft: "31%" }} onClick={optionTwo}>
          Click
        </Button><br></br>
      </>
    );
  } else {
    return <NotFound />;
  }
};

export default ShowQuestion;
