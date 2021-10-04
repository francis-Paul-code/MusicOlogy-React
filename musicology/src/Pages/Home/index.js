import React from 'react';
import {Grid, Typography, Button, makeStyles} from '@material-ui/core';
import logo from '../../Images/LOGO.png';
import {m_Notation} from '../../Images/icons8-music-notation-64.png';

const useStyle = makeStyles((theme) => ({
    root:{
        position:"relative",
        width:'100%',
        height:'100vh !important',
        color:'white',
        background:'#060F1E',
        '& .sideBar':{
            position:"relative",
            height:"100%",
            width:"21%",
            boxSizing:"border-box",
            float:"left"
        },
        '& .contentCarrier':{
            position:"relative",
            height:"94%",
            width:"75%",
            boxSizing:"border-box",
            float:"right",
            top:"3%",
            left:"2%",
            borderRadius:"2.5vh",
            background:"#06142B"
        },
        '& .sideTab':{
            position:"relative",
            height:"90%",
            width:"92%",
            top:"5%",
            left:"4%",
            margin:"0",

        },
        '& .logo':{
            position:"relative",
            width:"85%",
            left:"15%",
            height:"6.3vh",
            backgroundImage:`url(${logo})`,
            backgroundSize:'contain',
            backgroundPosition:'left',
            backgroundRepeat:'no-repeat'
        },
        '& .navLinks1':{
            position:"relative",
            width:"75%",
            left:"10%"
        }


    }
}))

const Home = () => {

    const classes = useStyle();
    return (
       <div className={classes.root}> 
           <div style={{position:"relative", width:'100%',height:'100%',display:"flex"}}>
                <Grid className="sideBar">
                    <Grid className="sideTab">
                        <div className="logo">
                        </div>
                        <Grid>
                            <div className="NavLinks1">
                                <Button variant="text" startIcon={<m_Notation/>} style={{
                                                                                           color:"white" ,
                                                                                           fontSize:"2vh",
                                                                                           fontFamily:"Ubuntu Bold",
                                                                                           fontWeight:"bolder"
                                                                                           //background:"#B93F2F"
                                                                                          }}>
                                    Top 100
                                </Button>
                            </div>
                            <div className="NavLinks2">

                            </div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className="contentCarrier">

                </Grid>
                
           </div>
       </div>
    );
}
export default Home;