import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';
import Dashboard from './components/Dashboard'
import './App.css';
import ContainerTask from "./components/Tasks/ContainerTask";


class App extends Component {

  render() {
    return (
            <div>
            <Header/>
                <ContainerTask/>
                <Router>
                <div>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/list" component={List}/>
                    <Route path="/search" component={Search}/>
                </div>
            </Router>
            <List />
            <Search />
        </div>
    );
  }
}

// App.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default App;
