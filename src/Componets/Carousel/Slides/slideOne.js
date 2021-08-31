import React from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import headImage from '../../../Images/HeadImage.png';
import {logo} from '../../../Pages/Landing';


const useStyles = makeStyles(() => ({
    root:{
        position:'relative',
        width:'100%',
        height:'78vh !important',
        color:'white',
        background: 'linear-gradient(178.54deg, rgba(0, 22, 222, 0.01) 6.88%, rgba(0, 22, 222, 0.008) 93.47%), linear-gradient(252.46deg, rgba(180, 58, 58, 0.02) 16.02%, rgba(180, 58, 58, 0.016) 92.55%), linear-gradient(117.22deg, rgba(255, 255, 255, 0.025) 18.38%, rgba(255, 255, 255, 0.04) 83.36%)',
        boxShadow: 'inset 0px 3.67583px 17.4602px rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(22.9739px)',
        borderRadius:'36px',
        '& .slideOne':{
            position:'relative',
            width:'100%',
            height:'100%',
        },
        '& .container':{
            position:'relative',
            width:'100%',
            height:'100%',
        },
        '& .HeadImage':{
            position:'relative !important', 
            height:'78vh',
            backgroundImage:'url(/static/media/HeadImage.7ece86f1.png)',
            backgroundRepeat:'no-repeat',
            backgroundSize:'contain',
            backgroundPosition:'center'
        },
        '& .textContainer':{
            position:'relative !important', 
            height:'78vh',
        },
        '& .mainText':{
            width:'85%',
            position:'relative',
            color:'white',
            float:'left ',
            fontFamily:'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important',
            fontWeight:'bolder !important',
            lineHeight:'1',
            fontSize:'4.3rem !important',
            left:'15%'

        },
        '& .subText':{
            width:'85%',
            position:'relative',
            color:'#B93F2F',
            float:'left ',
            fontFamily:'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji" !important',
            fontWeight:'bolder !important',
            lineHeight:'1',
            fontSize:'2.3rem !important',
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
            <div className="container">
                    <Grid container justifyContent="space-around" spacing={0.5}>
                        <Grid item xs={6} className="textContainer">
                            <div style={{position:'relative', top:'15%'}}>
                                <Typography className="mainText">
                                    Without Music Life Is A Mistake
                                </Typography>
                                <Typography className="subText">
                                    Try MusicOlogy Premium Free For 1 Month
                                </Typography> 
                            </div>
                        
                        <div className="buttons">
                             <span >
                                <Button style={{color:'white', 
                                              background:'#B93F2F', 
                                              width:'200px',                                              
                                            position:'relative', 
                                             height:'3rem',  
                                            fontWeight:'900', 
                                            fontSize:'1rem',
                                            borderRadius:'30px',
                                         } }>
                                Get Started
                                </Button>
                                <span>
                                    <Button onMouseOver={mouseOver} onMouseOut={mouseOut} style={{color:'grey', fontWeight:'600', fontSize:'0.8rem'}}>
                                        Get 1 Month Premium On Us.
                                    </Button>
                                </span>
                            </span>
                        </div>
                        </Grid>
                        <Grid item xs={6} className="HeadImage">

                        </Grid> 
                    </Grid>
                </div> 
            </Grid>
        </div>
    )
}
export default SlideOne;
