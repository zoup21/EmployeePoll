
import { useSelector } from "react-redux";



const CheckIfQuestion = (id) => {
    const existingQuestions = useSelector(
        (state) => state.existedQuestions.questions
      );

      const isIdIncluded = Object.keys(existingQuestions).includes(id)


    return(
        isIdIncluded  
    )


}




export default CheckIfQuestion;