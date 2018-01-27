import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import tasksReducer from './components/state/state';
import App from './App';

const reducer = combineReducers({
    tasks: tasksReducer
});

// const store = createStore(reducers);
const store = createStore(
    reducer
);

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));


