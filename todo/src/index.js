import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import tasksReducer from './components/state/state';
import App from './App';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    tasks: tasksReducer
});

// const store = createStore(reducers);
const store = createStore(reducers, undefined, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
));

ReactDOM.render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));


