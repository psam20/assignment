import React from 'react';

import Questions from '../Components/questions';

const ApplicationInfo = (props)=>{
   
  
    return (
        <div>
             
            <Questions questions={props.ques} />
          
           
          
        </div>
    )
}

export default ApplicationInfo;
