import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import LifeCard from '../components/card/card';
import Header from '../components/header/header';

export default function list() {

    return (
        <React.Fragment>
            <Header />

            <LifeCard />

            <Fab style={{
                position: 'absolute',
                bottom: '2rem',
                right: '2rem'
            }} color="primary" aria-label="add" component={Link} to="/add-person">
                <AddIcon />
            </Fab>
        </React.Fragment>
    );
}
