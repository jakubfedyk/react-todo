import React, { Component } from 'react';
import { Checkbox, IconButton } from 'material-ui';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import { DeleteIcon } from 'material-ui-icons/Delete';

const style = {
    checked: {
        textDecoration: 'line-through'
    },
    unChecked: {
        color: 'red'
    }
};

class Task extends Component {

    state = {
        checked: false
    };

    handleChange(event) {
        this.setState({ checked: event.target.checked });
    }

    render() {
        return(
            <ListItem>
                <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleChange}
                />
                <ListItemText primary={this.props.name} style={this.state.checked ? style.checked : style.unChecked}/>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete">
                        <DeleteIcon onClick={this.props.onDelete}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default Task;