import { configureStore } from "@reduxjs/toolkit";

import LoginReducer from "./loginSlice";
import UserReducer from "./usersSlice";
import LoggedUserReducer from "./loggedUser";
import ExistingQuestionsReducer from "./existingQuestions";
import CreateQuestionReducer from "./createQuestionSlice";
import SaveAnswerReducer from "./saveAnswerSlice"

const store = configureStore({
  reducer: {
    users: UserReducer,
    login: LoginReducer,
    loggedUser: LoggedUserReducer,
    existedQuestions : ExistingQuestionsReducer ,
    createQuestion : CreateQuestionReducer ,
    saveAnswer : SaveAnswerReducer
  },
});

export default store;
