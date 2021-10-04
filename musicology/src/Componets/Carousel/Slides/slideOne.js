import React from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import headImage from '../../../Images/HeadImage.png';
import {logo} from '../../../Pages/Landing';


const useStyles = makeStyles(() => ({
    root:{
        position:'relative',
        width:'90%',
        left:"5%",
        height:'78vh !important',
        color:'white',
        background:'#06142B',
        borderRadius:'20px',
        '& .slideOne':{
            position:'relative !important',
            width:'100% !important',
            height:'100% !important',
        },
        '& .slideContainer':{
            position:'relative',
            width:'100% !important',
            height:'100%',
        },
        '& .HeadImage':{
            position:'relative !important', 
            height:'78vh',
            backgroundImage:'url('+headImage+')',
            backgroundSize:'contain',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat'
        },
        '& .textContainer':{
            position:'relative !important', 
            height:'78vh',
            textAlign:'left !important',
            display:'block' 
        },
        '& .mainText':{
            width:'70%',
            position:'relative !important',
            color:'white',
            float:'left',
            fontFamily:'Ubuntu !important',
            fontWeight:'bolder !important',
            lineHeight:'1',
            fontSize:'5.5vw !important',
            left:'15%'
        },
        '& .subText':{
            width:'70%',
            position:'relative !important',
            color:'#B93F2F',
            float:'left ',
            fontFamily:'Ubuntu !important',
            fontWeight:'bolder !important',
            lineHeight:'1',
            fontSize:'2.5vw !important',
            left:'15%'

        },
        '& .buttons':{
            position:'relative',
            width:'100%',
            left:'15%',
            top:'25%'
        }
    }
}));
 const SlideOne = () => {

const mouseOver = (event) => {
    
    event.target.style.color='#B93F2F'
};
const mouseOut = (event) => {
event.target.style.color='grey'
};

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className="slideOne">
            <div className="slideContainer">
                    <Grid container  spacing={0.5}>
                        <Grid item xs={7} className="textContainer">
                            <div style={{position:'relative', top:'15%'}}>
                                <Typography className="mainText">
                                    Without Music Life Is A Mistake
                                </Typography>
                                <Typography className="subText">
                                    Try MusicOlogy Premium Free For 1 Month
                                </Typography> 
                            </div>
                            <div className="buttons">
                                <span style={{margin:'0', padding:'0', float:'left'}}>
                                    <Button style={{color:'white', 
                                                background:'#B93F2F', 
                                                width:'200px',                                              
                                                position:'relative', 
                                                height:'3rem',  
                                                fontWeight:'900', 
                                                fontSize:'1.2vw',
                                                borderRadius:'30px',
                                            } }>
                                    Get Started
                                    </Button>
                                    <span>
                                        <Button onMouseOver={mouseOver} onMouseOut={mouseOut} style={{color:'grey', fontWeight:'600', fontSize:'1.1vw'}}>
                                            Get 1 Month Premium On Us.
                                        </Button>
                                    </span>
                                </span>
                            </div>
                        </Grid>

                        <Grid item xs={5} className="HeadImage">
                        </Grid> 
                    </Grid>
                </div> 
            </Grid>
        </div>
    )
}
export default SlideOne;
