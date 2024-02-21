import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  id: '',
  password: null,
  name:'',
  avatarURL: null,
  answers: {},
  questions: [],
  location: '/home'
};

const loggedUserSlice = createSlice({
  name: "LoggedUser",
  initialState: initialUserState,
  reducers: {
    loggedUser(state, action) {
        const [id , password , name , answers , questions, avatarURL] = action.payload
      state.id = id;
      state.password = password
      state.name = name
      state.answers = answers 
      state.questions = questions
      state.avatarURL = avatarURL
    },
    addQuestions(state, action){
      const { qid, answer } = action.payload;
      state.answers[qid] = answer
    },
    currentLocation(state, payload){
      state.location = payload
    }
  },
});

export const loggedUserActions = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
