import {Constants as c} from '../Constants/constant';
import axios from 'axios';
export const fetchApplicationBegin = ()=> ({
    type: c.FETCH_APPLICATIONS_BEGIN
});

export const fetchApplicationSuccess =  (data) => ({
    type:c.FETCH_APPLICATIONS_SUCCESS,
    payload:data,
})

export const fetchApplicationFailure =( error) => ({
    type:c.FETCH_APPLICATIONS_FAILURE,
    payload:error,
})

export const addComments=(data)=>({
   type:c.ADD_COMMENT,
   payload:data
})

// This is a Combined fetchApplications Actions for Begin , success and Failure
export const fetchApplications= ()=>{
    return async (dispatch)=>{
              dispatch(fetchApplicationBegin())

              try{
                      const respose= await fetch('http://localhost:3010/applications')
                      const data = await respose.json();
                      console.log(data);
                      dispatch(fetchApplicationSuccess(data))
              }
              catch(err){
                   console.log(err)
                   dispatch(fetchApplicationFailure());
              };
              
    }
}
export const putApplicationComment=(appId,quesId,data)=>{
    return async (dispatch)=>{
        try{
            axios.put(`http://localhost:3010/applications/${appId}`,data)
        
         }
        catch(err){
            console.log(err)
        }
    }
}