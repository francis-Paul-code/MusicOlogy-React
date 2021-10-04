import React from 'react';
import {Grid, Typography, Button,  makeStyles , withStyles} from '@material-ui/core';
import CarouselSlide from '../../Componets/Carousel/carouselSlide';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import logo from '../../Images/LOGO.png';

const useStyle = makeStyles(() => ({
    root:{
        width:'100%',
        background:'#060F1E',
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
            position:"relative",
            width:"26%",
            top:"10%",
            //height:"7%",
            backgroundImage:`url(${logo})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            cursor:"pointer"
        },
        '& .navLinks':{
            position:'relative',
            height:'100%',
            width:'70%'
        },
        '& .navBar':{
            position:'relative',
            width:"100%",
            justifyContent:"space-around",
            textAlign:"right",
            height:"90%",
            top:"10%",
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
            fontSize:'1.4vw',

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

const Btn = withStyles({
    root:{
        background:"transparent",
        color:"white",
        cursor:"pointer",
        border:'0',
        height:"6.3vh",
        padding:"0",
        marginTop:"0.4vh",
        transitionProperty:' background, box-shadow, border',
        transitionDuration: '250ms, 250ms, 250ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1), cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDelay: '0ms, 0ms, 0ms',
    },
    label:{
        textTransform:"none",
        justifyContent:"center",
        fontFamily:"Ubuntu Bold",
        height:"100%",
    },
    startIcon:{
        marginLeft:"6px",
        marginRight:"3px"
    }

})(props => <Button {...props} />);

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
                <div className="logo">
                </div>
                <Grid className="navLinks">
                    <div className="navBar">
                            <div style={{position:"relative",right:"15%"}}>
                                    <Btn onMouseOver ={mouseOver}
                                         onMouseOut ={mouseOut}
                                        style={
                                            {   
                                                position:"relative",
                                                width:"10%",
                                                marginLeft:"2%",
                                                fontFamily:"Ubuntu Bold",
                                                fontSize:"2.7vh",
                                                color:"white"
                                            }
                                        }
                                    
                                    >
                                        Premium
                                    </Btn>

                                    <Btn onMouseOver ={mouseOver}
                                         onMouseOut ={mouseOut}
                                        style={
                                            {   
                                                position:"relative",
                                                width:"10%",
                                                marginLeft:"2%",
                                                fontFamily:"Ubuntu Bold",
                                                fontSize:"2.7vh",
                                                color:"white"
                                            }
                                        }
                                    
                                    >
                                        Download
                                    </Btn>
                                    
                                    <Btn onMouseOver ={mouseOver}
                                         onMouseOut ={mouseOut}
                                        style={
                                            {   
                                                position:"relative",
                                                width:"10%",
                                                marginLeft:"2%",
                                                fontFamily:"Ubuntu Bold",
                                                fontSize:"2.7vh",
                                                color:"white"
                                            }
                                        }
                                    
                                    >
                                        Support
                                    </Btn>
                                    
                                    <Btn onMouseOver ={mouseOver2}
                                         onMouseOut ={mouseOut2}
                                        style={
                                            {   
                                                position:"relative",
                                                width:"10%",
                                                marginLeft:"2%",
                                                fontFamily:"Ubuntu Bold",
                                                fontSize:"2.7vh",
                                                color:"#B93F2F"
                                            }
                                        }
                                    
                                    >
                                        Sign In
                                    </Btn>
                                    
                                    <Btn 
                                        style={
                                            {   
                                                position:"relative",
                                                width:"12%",
                                                marginLeft:"2%",
                                                borderRadius:"1.5vh",
                                                fontFamily:"Ubuntu Bold",
                                                fontSize:"2.7vh",
                                                height:"98%",
                                                backgroundColor:"#B93F2F"
                                            }
                                        }
                                    
                                    >
                                        Sign Up
                                    </Btn>
                            </div>        
                    </div>
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
