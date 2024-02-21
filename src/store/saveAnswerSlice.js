import { createSlice } from "@reduxjs/toolkit";
import { _saveQuestionAnswer } from "../_DATA";


const initialSaveState = {
    authedUser : '' ,
    qid : '' ,
    answerOne : 'optionOne',
    answerTwo : 'optionTwo'
}




const SaveAnswerSlice = createSlice({
    name : 'Save Answer' , 
    initialState : initialSaveState ,
    reducers: {
        authedUser(state, action){
            state.authedUser = action.payload;
        },
        questionId(state, action){
            state.qid = action.payload
        }, 
        answer(state, action){
            state.answer = action.payload
        }
    }
})


export const saveAnswer = (authedUser , qid , answer) => async (dispatch) => {
    try{
        await _saveQuestionAnswer({authedUser, qid , answer})
    }catch(error){
        console.error('Error saving answer:', error)
    }    
}






export const SaveAnswerActions = SaveAnswerSlice.actions 
export default SaveAnswerSlice.reducer;