import { Button, Card, CardContent } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const timeString = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateString = date.toLocaleDateString();

  return `${timeString} ${dateString}`;
};

const ExistingQuestions = () => {
  const userAnswers = useSelector((state) => state.loggedUser.answers);
  const existingQuestions = useSelector(
    (state) => state.existedQuestions.questions
  );
  const [show, setShow] = useState(true);

  const remainingQuestions = Object.keys(existingQuestions).filter(
    (questionId) => !(questionId in userAnswers)
  );

  const remainingQuestionsUser = Object.keys(existingQuestions).filter(
    (questionId) => questionId in userAnswers
  );

  const remainingQuestionObjectsUser = remainingQuestionsUser.map(
    (questionId) => existingQuestions[questionId]
  );

  const remainingQuestionObjects = remainingQuestions.map(
    (questionId) => existingQuestions[questionId]
  );

  const sortedQuestions = Object.values(remainingQuestionObjects).sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const sortedQuestionsDone = Object.values(remainingQuestionObjectsUser).sort(
    (a, b) => b.timestamp - a.timestamp
  );

  const showDone = () => {
    setShow(!show);
  };

  return (
    <div>
      <Button data-testid='toggleButton' onClick={showDone}>
        {show ? "Show done questions" : "Show answered questions"}
      </Button>
      {show && (
        <div>
          <h3 data-testid='newQuestion'>New Questions</h3>
          <div>
            {Object.values(sortedQuestions).map((question) => (
              <Card key={question.id}>
                <CardContent>
                  {question.author}
                  <br></br>
                  {formatTimestamp(question.timestamp)}
                  <br></br>
                  {/* <Button>Show</Button> */}
                  <Link
                    to={`question/${question.id}`}
                    style={{ textDecoration: "none", color: "green" }}
                  >
                    Show
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {!show && (
        <div>
          <h3>Done</h3>
          <div>
            {Object.values(sortedQuestionsDone).map((question) => (
              <Card key={question.id}>
                <CardContent>
                  {question.author}
                  <br></br>
                  {formatTimestamp(question.timestamp)}
                  <br></br>
                  {/* <Button>Show</Button> */}
                  <Link
                    to={`question/done/${question.id}`}
                    style={{ textDecoration: "none", color: "green" }}
                  >
                    Show
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ExistingQuestions;
