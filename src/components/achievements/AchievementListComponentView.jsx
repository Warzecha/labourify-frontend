import React from 'react';
import Grid from '@material-ui/core/Grid';
import AchievementComponent from './AchievementComponent';

const AchievementListComponentView = (props) => {

    const {
        allAchievements
    } = props;


    return (
        <Grid container spacing={3}>

            {
                allAchievements.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={6} key={index}>
                            <AchievementComponent achievement={item}/>
                        </Grid>);
                })
            }


        </Grid>
    );
};

export default AchievementListComponentView;
