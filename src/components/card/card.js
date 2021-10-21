import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './card.css';

export default function LifeCard() {
    let data = localStorage.getItem('data');
    let jsonData = JSON.parse(data);
    return (
        <React.Fragment>
            {
                jsonData && jsonData.map(i => (
                    <Card className="card" variant="outlined" key={i.id}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom className="name-typo">{i.name}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" component={Link} to={"/detail/" + i.id}>Learn More</Button>
                        </CardActions>
                    </Card>
                ))
            }
            {
                !jsonData ? <h1>Create New Record '+'</h1> : null
            }
        </React.Fragment>
    );
}
