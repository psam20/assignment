import React from 'react';


import { connect } from 'react-redux';

import HomePage from '../Pages/homePage';



function HomePageContainer({ candidates}) {
   

    return (
        <div>
           <HomePage candidate={candidates} />
          
        </div>


    );
}


const MapStateToProps = (state) => ({
    candidates: state.candidates.candidates,

})
export default connect(MapStateToProps,null)(HomePageContainer);
