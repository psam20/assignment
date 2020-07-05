import React from 'react';
import {useParams} from 'react-router-dom';
import ApplicationInfo from '../Pages/applicationInfo';
import {connect} from 'react-redux';

const ApplicationInfoContainer = ({candidates,applications,questions})=>{
     
    const {id}= useParams();
    console.log(id)
    //Here I am Selecting the Candidate from the List of Candidates passed from the Store
    const selectedCandidate=candidates.find(c => c.id.toString() === id)
    console.log(selectedCandidate);
    return (
        <div>
            {selectedCandidate.applicationId?<ApplicationInfo ques={questions} app={applications}/>:<div><h1 className="h1">Candidate Does Not Have Any Application With Us</h1></div>}
             
        </div>
    )
}

const MapStateToProps = (state)=>({
    candidates:state.candidates.candidates,
    applications:state.applications.applications,
    questions:state.questions.questions,
})

export default connect(MapStateToProps,null) (ApplicationInfoContainer);
