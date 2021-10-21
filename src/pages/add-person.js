import React, { useState } from 'react';
import "date-fns";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import TextField from '@material-ui/core/TextField';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import Header from '../components/header/header';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

export default function AddPerson(props) {
    const [name, setName] = useState(null);
    const [date, setDate] = useState(new Date());

    function generateUserID() {
        const min = 1000, max = 9999;
        return Math.floor(min + (max - min) * Math.random());
    }

    const handleDateChange = (data) => {
        setDate(new Date(data));
    };

    const handleText = (data) => {
        setName(data.target.value);
    }

    const handleSubmit = () => {
        let data = localStorage.getItem('data');
        let jsonData = data ? JSON.parse(data) : [];
        jsonData.push({
            id: generateUserID(),
            name: name,
            date: date
        });
        localStorage.setItem('data', JSON.stringify(jsonData));
        props.history.push('/list');
    }

    return (
        <React.Fragment>
            <Header />

            <Card variant="outlined" className="card" style={{
                width: '18rem',
                margin: '6rem auto 0',
                padding: '0 1rem 1rem'
            }}>
                <CardContent>

                    <h2>Add User</h2>

                    <TextField
                        onChange={handleText}
                        label="Name"
                        style={{
                            width: '100%'
                        }}
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <KeyboardDatePicker margin="normal"
                            id="date-picker-dialog"
                            label="Date of Birth"
                            format="dd/MM/yyyy"
                            value={date}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            style={{
                                width: '100%'
                            }}
                        />
                    </MuiPickersUtilsProvider>
                </CardContent>
                <CardActions>
                    <Button size="large" onClick={() => handleSubmit()} variant="contained" color="primary" component={Link} to="/list">Add Person</Button>
                </CardActions>
            </Card>

        </React.Fragment>
    );
}
