import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard'
import './App.css';



class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Dashboard/>
                <Footer/>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default App;
