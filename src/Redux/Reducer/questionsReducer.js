import {Constants as c} from '../Constants/constant';

const INITIAL_STATE={
   questions:[],
   loading:false,
   hasErrors:false
}

 const QuestionsReducer = (state=INITIAL_STATE,action)=>{

    switch (action.type) {
        case c.FETCH_QUESTIONS_BEGIN:
            return {
                ...state,
                loading:true,

            }
         case c.FETCH_QUESTIONS_SUCCESS:
             return {
                 questions:action.payload,
                 loading:false,
                 hasErrors:false
             }  
        case c.FETCH_QUESTIONS_FAILURE:
            return {
                ...state,
                hasErrors:true
            } 
    
        default:
            return state
    }

}
export default QuestionsReducer;