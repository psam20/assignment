import React, { useEffect } from 'react';
import { fetchCandidate } from '../Redux/Actions/candidateActions';
import { fetchApplications } from '../Redux/Actions/applicationActions'
import { fetchQuestions } from '../Redux/Actions/questionsAction';

import { connect } from 'react-redux';

import App from '../App';


function AppContainer({ candidates, fetchCandidates, questions, applications, fetchQuestions, fetchApplications }) {
    useEffect(() => {
        fetchCandidates();
        fetchQuestions();
        fetchApplications();
    }, [fetchCandidates, fetchApplications, fetchQuestions])

    return (
        <div>
            <App candidate={candidates} questions={questions} applications={applications} />
          
        </div>


    );
}

const MapDispatchToProps = (dispatch) => {

    return {
        fetchCandidates: () => dispatch(fetchCandidate()),
        fetchApplications: () => dispatch(fetchApplications()),
        fetchQuestions: () => dispatch(fetchQuestions())


    }
}
const MapStateToProps = (state) => ({
    candidates: state.candidates.candidates,
    applications: state.applications.applications,
    questions: state.questions.questions,
})
export default connect(MapStateToProps, MapDispatchToProps)(AppContainer);
