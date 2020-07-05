import {Constants as c} from '../Constants/constant';

const INITIAL_STATE={
   candidates:[],
   loading:false,
   hasErrors:false
}

const CandidateReducer = (state=INITIAL_STATE,action)=>{

    switch (action.type) {
        case c.FETCH_CANDIDATE_BEGIN:
            return {
                ...state,
                loading:true,

            }
         case c.FETCH_CANDIDATE_SUCCESS:
             return {
                 candidates:action.payload,
                 loading:false,
                 hasErrors:false
             }  
        case c.FETCH_CANDIDATE_FAILURE:
            return {
                ...state,
                hasErrors:true
            } 
    
        default:
            return state
    }

}
export default CandidateReducer;