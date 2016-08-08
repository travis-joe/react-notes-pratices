import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List'
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
//
// import App from './components/app';
// import reducers from './reducers';
//
// const createStoreWithMiddleware = applyMiddleware()(createStore);


// <Provider store={createStoreWithMiddleware(reducers)}>
//     <App />
// </Provider>


ReactDOM.render(
    <List />
  , document.querySelector('.container'));
