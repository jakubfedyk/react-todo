import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import Header from './components/Header';
import List from './components/List';
import Search from './components/Search';
import Dashboard from './components/Dashboard'
import './App.css';
import ContainerTask from "./components/Tasks/ContainerTask";


class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <div className="App">
            <Header/>
                <ContainerTask/>
                <Router>
                <div>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/list" component={List}/>
                    <Route path="/search" component={Search}/>
                </div>
            </Router>
            <List/>
            <Search/>
        </div>
        </MuiThemeProvider>
    );
  }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default App;
