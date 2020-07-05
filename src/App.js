import React from 'react';
import {Switch,Route,useRouteMatch} from 'react-router-dom';
import HomePageContainer from './Containers/HomePageContainer';
import ApplicationInfoContainer from './Containers/applicationInfoContainer'
import VideoResponse from './Components/videoResponse';
import './App.css';


function App(props) {
    const {url}= useRouteMatch();
   console.log(url)
  return (
    <div className="App">
         
     
        <Switch>
          <Route  path="/" exact component={()=>(<HomePageContainer/>)}/>
          <Route path="/:id" exact component={ApplicationInfoContainer}/>
          <Route path="/:id/:id"  component={()=>(<VideoResponse videos={props.applications} candidate={props.candidate} questions={props.questions} />) }/>
        </Switch>

      
      
    </div>
  );
}


export default App;
