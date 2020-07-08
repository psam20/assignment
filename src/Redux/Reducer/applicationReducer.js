import {Constants as c} from '../Constants/constant';

const INITIAL_STATE={
   applications:[],
   loading:false,
   hasErrors:false
}

const ApplicationsReducer = (state=INITIAL_STATE,action)=>{

    switch (action.type) {
        case c.FETCH_APPLICATIONS_BEGIN:
            return {
                ...state,
                loading:true,

            }
         case c.FETCH_APPLICATIONS_SUCCESS:
             return {
                 applications:action.payload,
                 loading:false,
                 hasErrors:false
             }  
        case c.FETCH_APPLICATIONS_FAILURE:
            return {
                ...state,
                hasErrors:true
            } 
          
    
        default:
            return state
    }

}

export default ApplicationsReducer;