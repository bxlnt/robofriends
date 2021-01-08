import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { searchRobots, requestRobots } from './reducers';
import { createLogger } from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';
import './index.css';
import App from './containers/App';
import 'tachyons';

const logger = createLogger();

const rootReducer = combineReducers({ searchRobots, requestRobots });

const store =
  createStore(rootReducer, applyMiddleware(thunkMiddleWare, logger));

ReactDOM.render(
  <React.StrictMode>
    {/* Provider passes down the store to any components that we want */}
    <React.StrictMode></React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
