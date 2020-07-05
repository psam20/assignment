import {Constants as c} from '../Constants/constant';
export const fetchCandidateBegin = ()=> ({
    type: c.FETCH_CANDIDATE_BEGIN
});

export const fetchCandidateSuccess =  (data) => ({
    type:c.FETCH_CANDIDATE_SUCCESS,
    payload:data,
})

export const fetchCandidateFailure =( error) => ({
    type:c.FETCH_CANDIDATE_FAILURE,
    payload:error,
})

// This is a Combined fetchCandidate Actions for Begin , success and Failure
export const fetchCandidate= ()=>{
    return async dispatch=>{
              dispatch(fetchCandidateBegin());

              try{
                      const respose= await fetch('http://localhost:3010/candidates')
                      const data = await respose.json();
                      dispatch(fetchCandidateSuccess(data))
              }
              catch(err){
                   console.log(err)
                   dispatch(fetchCandidateFailure());
              };
              
    }
}