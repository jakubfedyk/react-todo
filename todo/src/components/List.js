import React, { Component } from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
    block: {
        maxWidth: 250,
    },
    checkbox: {
        marginBottom: 20,
    },
};

class List extends Component {
    render() {
        return (
            <div style={styles.block}>
                <Checkbox
                    label="sssssssss"
                    style={styles.checkbox}
                />
            </div>
        );
    }
}


export default List;


