import { createSlice } from "@reduxjs/toolkit";
    
import { _getQuestions } from "../_DATA";



const initialQuestionsState = {
   questions : []
  };
  


  const ExistingQuestionsSlice = createSlice({
    name : 'ExistingQuestions',
    initialState : initialQuestionsState ,
    reducers : {
        getExistingQuestions(state, action){
            state.questions = action.payload
        }
    }
    
  })



  export const getExistingQuestions = () => {
    return async(dispatch) => {
        try{
            const questionsData = await _getQuestions();
            dispatch(ExistingQuestionsActions.getExistingQuestions(questionsData))
        }catch(error){
            console.log(error)
        }
    }
  }



  export const ExistingQuestionsActions = ExistingQuestionsSlice.actions

  export default ExistingQuestionsSlice.reducer;