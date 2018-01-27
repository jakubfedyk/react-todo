import React, {Component} from 'react';
import {Grid} from 'material-ui';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import {FaLinkedinSquare} from 'react-icons/lib/fa';


const styles = theme => ({
        root: {
            width: 30,
            height: 30,
            padding: 10
        }
    }
);

class Footer extends Component {
    render() {
        const {classes} = this.props;
        return (
            <Grid container={12}>
                <Grid>
                    <Grid style={{textAlign: "center", paddingTop: 20}}>
                        <span className={classes.root}>Created by Jakub Fedyk</span>
                    </Grid>
                </Grid>
                <Grid>
                    <a href="https://www.linkedin.com/in/jakubfedyk/"><FaLinkedinSquare
                        color="warning"
                        className={classes.root}
                    /></a>
                </Grid>
            </Grid>
        )
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);