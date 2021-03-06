import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store,persistor} from './Redux/Store/store';
import {BrowserRouter as Router} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';
import './index.css';
import AppContainer from './Containers/AppContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <Router>
    <PersistGate persistor={persistor}>
    <AppContainer />
    </PersistGate>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
