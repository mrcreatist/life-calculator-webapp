import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


export default function Header(props) {
    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button component={Link} to="/list" style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1rem'
                    }}>
                        Life Calculator
                    </Button>
                    <Button
                        component={Link}
                        to="/about"
                        style={{
                            color: 'white',
                        }}
                    >About</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}
