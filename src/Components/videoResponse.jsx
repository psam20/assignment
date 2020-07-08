import React from 'react';
import {useParams,useRouteMatch} from 'react-router-dom';
import ReactPlayer from 'react-player';
import Comment from './comments';
import './VideoPlayer.css';
const VideoResponse = (props)=>{
    const {url}=useRouteMatch();
   const candidateId=url.split('/');
  
    const {id} = useParams();
    // Find Questions Selected By the User
     const question=props.questions.find(c=> c.id.toString()===id)
    
   const cId=candidateId[1];
    // Candidate which is CLicked BY the User
     const selectedCandidate= props.candidate.find(c=> c.id.toString()===cId);
   
//    Video Sort By Application Id
       const selectedApplication= props.videos.find(c => c.id.toString()===selectedCandidate.applicationId.toString());
       console.log(selectedApplication);
// Video Sort By questionId
    const selectedQuetionVideo=selectedApplication.videos.find(c=>c.questionId.toString()=== id.toString())
    console.log(selectedQuetionVideo);

  
     
    return (
    
    <div>

  
    <h1 className="h1">
     Candidate Name :- {selectedCandidate.name}
    </h1>
    <h1 className="h1">{
                question.question
    }</h1>

    {
         selectedQuetionVideo?
         <div style={{textAlign:"center"}}>
         <div className='player-wrapper'>
            
               
          <ReactPlayer
            className='react-player'
            url={`${selectedQuetionVideo.src}`}
             controls
          />
        </div>
        </div> 
        :<p className="p">Candidate Has Not Uploaded the Video for This Question</p>}

        {selectedQuetionVideo?<Comment appId={selectedCandidate.applicationId} quesId={id} videos={selectedApplication.videos}/>
:""} 
    </div>
    
    )
}

export default VideoResponse;