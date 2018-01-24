import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';
import Dashboard from './components/Dashboard'
import './App.css';


class App extends Component {
  render() {
    return (

        <div>
            <Header/>
            <Router>
                <div>
                    <Header/>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/list" component={List}/>
                    <Route path="/search" component={Search}/>
                </div>
            </Router>
            <List/>
            <Search/>
        </div>
    );
  }
}

export default App;
