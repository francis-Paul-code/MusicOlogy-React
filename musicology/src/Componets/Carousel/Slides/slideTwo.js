import React from 'react';
import { makeStyles, Grid, Typography, Button } from '@material-ui/core';
import headImage from '../../../Images/MockUpHeadImage.png';
import Image from '../../../Images/head.png';
import AppleIcon from '@material-ui/icons/Apple';
import {FaGooglePlay} from 'react-icons/fa';

const useStyles = makeStyles(() => ({
    root:{
        position:'relative',
        width:'90%',
        left:"5%",
        height:'78vh !important',
        color:'white',
        background:'#06142B',
        borderRadius:'20px',
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
            width:'100%',
            top:'70%',
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
                                            <Button variant="contained" startIcon={<AppleIcon/>} style={{color:'white', fontSize:'0.5rem', fontFamily:'sans serif', border:'none !important', marginRight:'1rem', background: 'linear-gradient(178.54deg, rgba(0, 22, 222, 0.01) 6.88%, rgba(0, 22, 222, 0.008) 93.47%), linear-gradient(252.46deg, rgba(180, 58, 58, 0.02) 16.02%, rgba(180, 58, 58, 0.016) 92.55%), linear-gradient(117.22deg, rgba(255, 255, 255, 0.025) 18.38%, rgba(255, 255, 255, 0.04) 83.36%)', boxShadow: 'inset 0px 3.67583px 17.4602px rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(22.9739px)' }}>
                                                 <div style={{display:'block', textAlign:'left'}}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
                                                    <h3 style={{position:'relative',fontSize:'0.9vw', fontWeight:'700', margin:'0', fontFamily:'Ubuntu !important'}}>Download on the</h3> 
                                                    <h3  style={{color:'white', fontWeight:'700 ',fontSize:'1.5vw', fontFamily:'Ubuntu', margin:'0'}}>App Store</h3>
                                                 </div> 
                                            </Button> 
                                            <Button variant="contained" startIcon={<FaGooglePlay/>} style={{margin:'0', color:'white', fontSize:'0.5rem', fontFamily:'sans serif',border:'none !important', background: 'linear-gradient(178.54deg, rgba(0, 22, 222, 0.01) 6.88%, rgba(0, 22, 222, 0.008) 93.47%), linear-gradient(252.46deg, rgba(180, 58, 58, 0.02) 16.02%, rgba(180, 58, 58, 0.016) 92.55%), linear-gradient(117.22deg, rgba(255, 255, 255, 0.025) 18.38%, rgba(255, 255, 255, 0.04) 83.36%)', boxShadow: 'inset 0px 3.67583px 17.4602px rgba(255, 255, 255, 0.25)', backdropFilter: 'blur(22.9739px)'}}>
                                                <div style={{display:'block', textAlign:'left'}}>
                                                    <h3 style={{position:'relative', fontSize:'0.9vw', fontWeight:'700', margin:'0', fontFamily:'Ubuntu !important'}}>Get it On</h3> 
                                                    <h3 style={{ margin:'0', color:'white', fontWeight:'700 ',fontSize:'1.5vw', fontFamily:'Ubuntu '}}>PLay Store</h3>
                                                </div>
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