import React from 'react';

import Questions from '../Components/questions';

const ApplicationInfo = (props)=>{
   
  
    return (
        <div>
              <h1 className="h1">Application Information</h1>
            <Questions questions={props.ques} />
          
           
          
        </div>
    )
}

export default ApplicationInfo;
