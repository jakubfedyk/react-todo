import React, { Component }from 'react'

class deleteButton extends Component {
    render () {
        return (
        <button onClick={this.props.onButtonClick}></button>
        )
    }
}

export default deleteButton