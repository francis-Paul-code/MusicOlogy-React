import React from 'react'
import { makeStyles, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root:{
        position:'relative',
        width:'100%',
        height:'100%',
        color:'white',
        background: 'linear-gradient(178.54deg, rgba(0, 22, 222, 0.01) 6.88%, rgba(0, 22, 222, 0.008) 93.47%), linear-gradient(252.46deg, rgba(180, 58, 58, 0.02) 16.02%, rgba(180, 58, 58, 0.016) 92.55%), linear-gradient(117.22deg, rgba(255, 255, 255, 0.025) 18.38%, rgba(255, 255, 255, 0.04) 83.36%)',
        boxShadow: 'inset 0px 3.67583px 17.4602px rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(22.9739px)',
        borderRadius:'36px',
        '& .slideThree':{
            position:'relative',
            width:'100%',
            height:'78vh',
        },
    }
}));
const SlideThree = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className="slideThree">
                SlideThree
            </Grid>
        </div>
    )
};

export default SlideThree;