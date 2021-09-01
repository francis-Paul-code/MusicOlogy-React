import React from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import headImage from '../../../Images/MockUpHeadImage.png';
import Image from '../../../Images/headpic.png';
import { Apple } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    root:{
        position:'relative!important',
        width:'100% !important',
        height:'100% !important',
        color:'white',
        background: 'linear-gradient(178.54deg, rgba(0, 22, 222, 0.01) 6.88%, rgba(0, 22, 222, 0.008) 93.47%), linear-gradient(252.46deg, rgba(180, 58, 58, 0.02) 16.02%, rgba(180, 58, 58, 0.016) 92.55%), linear-gradient(117.22deg, rgba(255, 255, 255, 0.025) 18.38%, rgba(255, 255, 255, 0.04) 83.36%)',
        boxShadow: 'inset 0px 3.67583px 17.4602px rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(22.9739px)',
        borderRadius:'36px',
        '& .slideTwo':{
            position:'relative !important',
            width:'100% !important',
            height:'78vh',
        },
        '& .grid1':{
            position:'relative',
            backgroundImage:'url('+headImage+')',
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            backgroundPosition:'center',
            height:'78vh'
        },
        '& .grid2':{
            position:'relative',
            backgroundImage:'url('+ Image +')',
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            backgroundPosition:'center',
            height:'77vh'
        },
        '& .btnGroup':{
            position:'relative',
            width:'50%',
            top:'70%',
            left:'25%'
        }
  
    }
}));
const SlideTwo = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className="slideTwo">
                <div>
                    <Grid container justify-content="space-around" spacing={0.5}>
                            <Grid item xs={7} className="grid1">
                            </Grid>
                            <Grid item xs={5} className="grid2"> 
                                    <Grid className="btnGroup">
                                            <Button variant="outlined" starticon={<Apple/>} style={{color:'white', fontSize:'0.5rem', fontFamily:'sans serif'}}>
                                                Download on the
                                                <h3 style={{color:'white', fontWeight:'900 ',fontSize:'2rem', fontFamily:'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji", '}}>App Store</h3>
                                            </Button>
                        
                                    </Grid>
                            </Grid>
                    </Grid> 
                </div>
               
            </Grid>
        </div>
    )
};

export default SlideTwo;