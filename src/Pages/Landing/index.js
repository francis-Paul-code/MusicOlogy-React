import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CarouselSlide from '../../Componets/Carousel/carouselSlide';
import { Link, BrowserRouter as Router } from 'react-router-dom';
// export let logo = document.getElementByClassName('.logo');

const useStyle = makeStyles(() => ({
    root:{
        width:'100%',
        background:'linear-gradient(180deg, #000000 0%, #06092A 65.23%, #06092A 100%)',
        overflow:'hidden !important',
        '& .Nav':{
            position:'absolute',
            width:'100%',
            height:'7%',
            display:'flex',
            justifyContent:'space-around',
            background:'transparent'
        },
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
            fontSize:'2rem',
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
            fontSize:'2rem',
            textAlign:'left',
            padding:'5px 0 0 0'
        },
        '& .navLinks':{
            position:'relative',
            height:'100%',
            width:'70%'
        },
        '& .carouselSlide':{
            position:'absolute',
            top:'9%',
            height:'84%',
            width:'100%',

        },
        '& .footer':{
            width:'100%',
            height:'5%',
            borderTop:'3px solid #B93F2F',
            position:'absolute',
            top:'95%'
        },
        '& .footerContainer':{
            position:'relative',
            width:'100%',
            height:'100%',
            textAlign:'center'
        },
        '& .footerContainer p':{
            fontWeight:'600',
            fontSize:'1.2rem',

        },
        '& .carousel':{
            position:'relative',
            height:'96%',
            width:'96%',
            left:'2%',
            top:'2%'
        }
        
    }
}));


const Landing = () => {

 const classes = useStyle();

const mouseOver = (event) => {
    
    event.target.style.color='#B93F2F'
};
const mouseOut = (event) => {
event.target.style.color='#FFFF'
};

const mouseOver2 = (event) => {

event.target.style.color='#ffff'
};
const mouseOut2 = (event) => {
event.target.style.color='#B93F2F'
};


    return (
        <div className={classes.root}>
            <div className="Nav">
                <Grid className="logo">
                    <Typography className="logo1">Music</Typography>
                    <Typography className="logo2">Ology</Typography>
                </Grid>
                <Grid className="navLinks">

                    <ul style={{padding:'5px 5px 0 5px', margin:'0', position:'relative', right:'10%', float:'right'}}>

                            <Button onMouseOver={mouseOver} onMouseOut={mouseOut} style={{color:'white', 
                                                                                           width:'130px',  
                                                                                           fontWeight:'600', 
                                                                                           fontSize:'1.2rem'}}> 
                                Premium
                            </Button>
                        
                            <Button onMouseOver={mouseOver} onMouseOut={mouseOut} style={{color:'white', 
                                                                                           width:'130px',  
                                                                                           fontWeight:'600', 
                                                                                           fontSize:'1.2rem'}}> 
                                Download
                            </Button>
            
                            <Button onMouseOver={mouseOver} onMouseOut={mouseOut}  style={{color:'white', 
                                                                                           width:'130px',  
                                                                                           fontWeight:'600', 
                                                                                           fontSize:'1.2rem'}}>
                                Support
                            </Button>
                    
                            <Button  onMouseOver={mouseOver2} onMouseOut={mouseOut2}  style={{color:'#B93F2F', 
                                                                                            width:'130px', 
                                                                                            fontWeight:'600', 
                                                                                            fontSize:'1.2rem'}}>
                                Sign Up
                            </Button>
                    
                            <Button style={{color:'#02030B', 
                                              background:'#B93F2F', 
                                              width:'130px',                                              
                                            position:'relative', 
                                             height:'80%',  
                                            fontWeight:'900', 
                                            fontSize:'1rem',
                                            borderRadius:'50px'} }>                                              
                                Log In
                            </Button>
                    </ul>
                </Grid>
            </div>
            <Grid className="carouselSlide">
                <div className="carousel">
                        {<CarouselSlide/>}
                </div>
            </Grid>
            <Grid className="footer">
                <div className="footerContainer">
                    <Typography>
                        MusicOlogy 2021| All Rights Reserved
                    </Typography>
                </div>
            </Grid>
        </div>
        

    )

}
export default Landing;
