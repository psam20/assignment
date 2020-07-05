import CandidateReducer  from '../Reducer/candidateReducer'
import QuestionsReducer from '../Reducer/questionsReducer'
import ApplicationsReducer from '../Reducer/applicationReducer'
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from 'redux';

const persistCongig= {
    'key':'root',
    storage,
    whitelist:['candidates','applications','questions']
  };

const RootReducer=combineReducers({
   
   candidates:CandidateReducer,
    applications :ApplicationsReducer,
    questions:QuestionsReducer,
})

export default persistReducer(persistCongig,RootReducer);