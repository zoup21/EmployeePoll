import {createSlice} from "@reduxjs/toolkit"
import { _saveQuestion } from "../_DATA"



const initialStateQuestion = {
    newQuestion : {
        optionOneText : '' ,
        optionTwoText : '' , 
        author : ' '
    } ,
    shouldrefresh : true
}


const createQuestionSlice = createSlice({
    name : 'Create Question' ,
    initialState: initialStateQuestion , 
    reducers : {
        updateOne(state, action){
            state.newQuestion.optionOneText = action.payload
        },
        updateTwo(state, action){
            state.newQuestion.optionTwoText = action.payload
        },
        updateAuthor(state,action){
            state.newQuestion.author = action.payload
        },
        refresh(state){
            state.shouldrefresh = !state.shouldrefresh
        }
    }

})


export const saveQuestion = (question) => async (dispatch) => {
  try {
    await _saveQuestion(question);
    dispatch(createQuestionActions.updateOne(""));
    dispatch(createQuestionActions.updateTwo(""));
  } catch (error) {
    console.error("Error saving question:", error);
  }
};




export const createQuestionActions = createQuestionSlice.actions
export default createQuestionSlice.reducer;