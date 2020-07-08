import React, { useState } from 'react';
import {TextField,Button} from '@material-ui/core';
import {connect} from 'react-redux'
import {putApplicationComment} from '../Redux/Actions/applicationActions'
// import {useFormik} from 'formik';
const Comment =({putComment,appId,quesId,videos})=>{
    const [comment,setComment]=useState('');
    const value={
        id:appId,
        videos:videos.map(v=>{
           
            if(v.questionId.toString()===quesId.toString()){
                // console.log(v.questionId)
                return {...v,comments:comment}
            }
            return v
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
            console.log(value)
            alert(JSON.stringify(value, null, 2));
          putComment(appId,quesId,value)
       
    }
  

    return (
        <div className="form-group" style={{textAlign:"center" }}>
           <div style={{display:"inline-block",width:"50%"}}>
           <form onSubmit={handleSubmit}> 
        <TextField required id="outlined-required" variant="outlined" label="Comments" name="comments" type="string" defaultValue={comment} onChange={(e)=>setComment(e.target.value)} fullWidth={true} multiline={true}/>
     
          <div className="form-group"><Button type="submit" color="primary" variant="contained" >Comment</Button></div>
        </form>
           </div>
        </div>
    )
}
const MapDispatchToProps=(dispatch)=>{
    return ({
      putComment:(appId,quesId,data)=>dispatch(putApplicationComment(appId,quesId,data))
    })
}

export default connect(null,MapDispatchToProps)(Comment);