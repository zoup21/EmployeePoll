import { Button, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createQuestionActions, saveQuestion } from "../store/createQuestionSlice";
import { useNavigate } from "react-router-dom";



const CreateQuestion = () => {
    const dispatch = useDispatch();
    const optionOne = useSelector((state) => state.createQuestion.newQuestion.optionOneText)
    const optionTwo = useSelector((state) => state.createQuestion.newQuestion.optionTwoText)
    const name = useSelector((state) => state.loggedUser.id);
    
    const newQuestion = useSelector((state) => state.createQuestion.newQuestion)
    const navigate = useNavigate();

    const updateOne = (e) => {
        dispatch(createQuestionActions.updateOne(e.target.value))
    }

    const updateTwo = (e) => {
        dispatch(createQuestionActions.updateTwo(e.target.value))
        dispatch(createQuestionActions.updateAuthor(name))
    }
 


    const SaveQuestion = (e) => {
        e.preventDefault();
        dispatch(saveQuestion(newQuestion))
        dispatch(createQuestionActions.refresh())
        navigate('/home')
    }



    return(
        <>
        <h2>Would You Rather</h2>
        <h3>Create Your Own Poll</h3>
        <form onSubmit ={SaveQuestion}>
            <label data-testid='firstOption'>First Option</label><br></br>
            <TextField placeholder="Option one"  value={optionOne} onChange={updateOne}/><br></br>
            <label data-testid='secondOption'>Second Option</label><br></br>
            <TextField placeholder="Option Two" value={optionTwo} onChange={updateTwo}/><br></br>
            <Button data-testid='button-submit' type="submit" disabled={optionOne==='' || optionTwo===''}>Submit</Button>
        </form>
        </>
    )
}




export default CreateQuestion;
