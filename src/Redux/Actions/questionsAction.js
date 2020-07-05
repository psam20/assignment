import {Constants as c} from '../Constants/constant';

export const fetchQuestionsBegin = ()=>({
    type:c.FETCH_QUESTIONS_BEGIN
})
export const fetchQuestionsSuccess= (data)=>({
    type:c.FETCH_QUESTIONS_SUCCESS,
    payload:data
})
export const fetchQuestionsFailure=()=>({
 type:c.FETCH_QUESTIONS_FAILURE
})

export const fetchQuestions = ()=>{
    return async (dispatch)=>{
        dispatch(fetchQuestionsBegin())

        try {
            const response =await fetch('http://localhost:3010/questions');
            const data= await response.json();
            console.log(data);
            dispatch(fetchQuestionsSuccess(data))
        } catch (error) {
            console.log(error)
            dispatch(fetchQuestionsFailure())
        }
    }
}
