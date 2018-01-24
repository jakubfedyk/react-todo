import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [
            ]
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                tasks: [

                ]
            });
        }, 5000);
    }

    render() {
        return(
            <div>
                <h2>My List Things To Do</h2>
                <ol>
                    {this.state.tasks.map((elem, index) => (
                        <li key={index}>{elem}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default List;