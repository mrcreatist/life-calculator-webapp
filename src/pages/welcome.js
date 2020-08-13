import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

export default function welcome() {
    return (
        <React.Fragment>
            <h2
                style={{
                    fontSize: '4rem',
                    margin: '4rem'
                }}
            >Welcome to Life Calculator</h2>
            <Button
                variant="contained"
                size="large"
                color="primary"
                component={Link}
                to="/list"
                style={{
                    margin: '4rem',
                    padding: '1.2rem 2rem'
                }}
            >Let's Start</Button>
        </React.Fragment>
    );
}
