import {Constants as c} from '../Constants/constant';
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