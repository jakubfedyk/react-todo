import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <div>
                <h1>App header</h1>
                <Router>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/List">List</Link></li>
                    </ul>
                </Router>
            </div>

        );
    }
}

export default Header;