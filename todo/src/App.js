import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import Header from './components/Header';
// import List from './components/List';
// import Search from './components/Search';
import Dashboard from './components/Dashboard'
import './App.css';
import ContainerTask from "./components/Tasks/ContainerTask";



class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Dashboard/>
                <ContainerTask/>
                {/*<List/>*/}
                {/*<Search />*/}
            </div>
        );
    }
}

// App.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default App;
