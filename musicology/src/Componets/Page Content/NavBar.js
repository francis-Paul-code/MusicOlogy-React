import React from 'react';
import {Button, Typography, makeStyles, } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root:{
            position:"relative !important",
            width:"100%",
            height:"20vh",
            '& .logo':{
                position:'relative',
                boxSizing:'border-box',
                display:'flex',
                width:'20%',
                height:'100%'
            },
            '& .logo1':{
                position:'relative',
                width:'45%',
                height:'100%',
                color:'white',
                fontFamily:'Ubuntu !important',
                fontWeight:'700',
                fontSize:'2.1vw',
                textAlign:'right',
                padding:'5px 5px 0 5px'
    
            },
            '& .logo2':{
                position:'relative',
                width:'45%',
                height:'100%',
                color:'#B93F2F',
                fontFamily:'Ubuntu !important',
                fontWeight:'700',
                fontSize:'2.1vw',
                textAlign:'left',
                padding:'5px 0 0 0'
            },

    }
}))

const NavBar = () => {
    const classes = useStyles();
    return (
        <div className={classes}>
            <Grrid container spacing={2}>
                <Grid item className="logo">
                    <Typography className="logo1">Music</Typography>
                    <Typography className="logo2">Ology</Typography>
                </Grid>
                <Grid item>

                </Grid>
            </Grrid>
        </div>
    )
}

export default NavBar
