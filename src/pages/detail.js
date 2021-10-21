import {
    differenceInDays,
    differenceInMonths,
    differenceInWeeks,
    differenceInYears
} from 'date-fns';
import React, { useEffect, useState } from 'react';
import Header from '../components/header/header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function Detail(props) {

    const [id, setId] = useState(0);

    useEffect(() => setId(props.match.params.id), [props.match.params.id]);

    function getUser() {
        let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
        let user = data.filter(i => i.id === parseInt(id))[0];
        return user
    }

    function GetDays() {
        let user = getUser();
        let display = null;
        if (user) {
            let date = new Date(user.date);
            let curDate = new Date();

            let days = differenceInDays(curDate, date);
            let month = differenceInMonths(curDate, date);
            let year = differenceInYears(curDate, date);
            let weeks = differenceInWeeks(curDate, date);

            display = (
                <span>
                    <Card className="card" variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom className="name-typo">{year} year(s)</Typography>
                        </CardContent>
                    </Card>
                    <Card className="card" variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom className="name-typo">{month} month(s)</Typography>
                        </CardContent>
                    </Card>
                    <Card className="card" variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom className="name-typo">{weeks} week(s)</Typography>
                        </CardContent>
                    </Card>
                    <Card className="card" variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom className="name-typo">{days} day(s)</Typography>
                        </CardContent>
                    </Card>
                </span>
            );
        }

        return (
            <React.Fragment>
                {display}
            </React.Fragment>
        )
    }


    return (
        <React.Fragment>
            <Header />
            <GetDays />
        </React.Fragment>
    );
}
