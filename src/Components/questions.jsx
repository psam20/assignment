import React from 'react';
import {Link,useRouteMatch} from 'react-router-dom';
const Questions = (props)=>{
 const {url}=useRouteMatch();
 console.log(url);

 

    return (
        <div style={{textAlign:"center"}}>
        <div style={{display:"inline-block"}}>
             <h1 className="h1">Questions</h1>
             {
                 props.questions.map((q,id)=>(
                 <Link to={`${url}/${q.id}`} key={id}><h4>{q.question}</h4></Link>
                 ))
             }
        </div>
        </div>
    )
}
export default Questions;