import React from 'react';
import {Grid, Typography, Button, makeStyles} from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    root:{
        width:'100%',
        background:'linear-gradient(180deg, #000000 0%, #06092A 65.23%, #06092A 100%)',
        overflow:'hidden !important',
    }
}))

const Home = () => {

    const classes = useStyle();
    return (
       <div className={classes}> 
         
       </div>
    );
}
export default Home;