import React from 'react';
import {Grid, Typography, Button, makeStyles} from '@material-ui/core';

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
            background:"white"
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

                    </Grid>
                </Grid>
                <Grid className="contentCarrier">

                </Grid>
                
           </div>
       </div>
    );
}
export default Home;