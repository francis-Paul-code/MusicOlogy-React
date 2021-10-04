import React from 'react';
import {Grid, Typography, makeStyles, Button, withStyles, IconButton, Avatar} from '@material-ui/core';
import logo from '../../Images/LOGO.png';
import m_Notation from '../../Images/icons8-music-notation-64.png';
import m_Album from "../../Images/icons8-music-album-60 (1).png";
import m_Artist from '../../Images/icons8-account-60.png';
import m_Tracks from '../../Images/icons8-music-record-60.png';
import m_Genres from '../../Images/icons8-music-library-60.png';
import m_Playlist from '../../Images/icons8-playlist-64.png';
import m_Queue from '../../Images/icons8-circled-play-60.png';
import m_Settings from '../../Images/icons8-settings-48.png';
import m_Help from '../../Images/icons8-help-48.png';
import logo_red from '../../Images/LOGO_HEAD_Red.png';
import logo_white from '../../Images/LOGO_HEAD_White.png';

const useStyle = makeStyles((theme) => ({
    root:{
        position:"relative",
        width:'100%',
        height:'100vh !important',
        color:'white',
        background:'#060F1E',
        '& .MuiButtonBase-root':{
            padding:"0 !important"
        },
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
            background:"#06142B",
            justifyContent:"space-around"
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
            height:"7%",
            backgroundImage:`url(${logo})`,
            backgroundSize:'contain',
            backgroundPosition:'left',
            backgroundRepeat:'no-repeat'
        },
        '& .navLinks1':{
            position:"relative",
            width:"95%",
            left:"5%",
            height:"57%"
        },
        '& .navLinks2':{
            position:"relative",
            width:"95%",
            left:"5%",
            height:"37%",
            borderTop:"2px solid #C4C4C4"
        },
        '& ._footer':{
            
        },
//----------------------Content Styling ------------------
        '& .statusBar':{
            position:"relative",
            width:"100%",
            height:"8%"
        },

        '& .contentInner':{
            position:"relative",
            width:"95%",
            left:"2.5%",
            height:"92%",
            borderTop:"2px solid #2D3441",
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
        justifyContent:"left",
        fontFamily:"Ubuntu Bold",
        height:"100%",
        borderRadius:"2vh",
    },
    startIcon:{
        marginLeft:"6px",
        marginRight:"3px"
    }

})(props => <Button {...props} />);

const Home = () => {
    
    const classes = useStyle();
    return (
       <div className={classes.root}> 
           <div style={{position:"relative", width:'100%',height:'100%',display:"flex"}}>
                <Grid className="sideBar">
                    <Grid className="sideTab">
                        <div className="logo">
                        </div>
                        <Grid style={{position:"relative", width:"100%", height:"95%",top:"2%"}}>
                            <div className="navLinks1">
                                <Btn variant="text" startIcon={<Avatar src={m_Notation} style={{height:"3.5vh", width:"3.5vh"}}/>} 
                                onClick={(event) =>{
                                    event.target.style.backgroundColor="#B93F2F";
                                }} style={{
                                 
                                    fontSize:"1.3vw",
                                    fontWeight:"bolder",
                                    position:"relative ",
                                    borderRadius:"10",
                                    width:"100%",
                                    top:"1%",
                                    
                                }}>
                                    Top 100
                                </Btn>

                                <Btn variant="text" startIcon={<Avatar src={m_Album} style={{height:"3.5vh", width:"3.5vh"}}/>} 
                                onClick={(event) =>{
                                    event.target.style.background="#B93F2F"
                                }} style={{
                                            fontSize:"1.3vw",
                                            fontWeight:"bolder",
                                            position:"relative ",
                                            textAlign:"left",
                                            width:"100%",
                                            top:"1%",
                                            
                                }}>
                                    Albums
                                </Btn>

                                <Btn variant="text" startIcon={<Avatar src={m_Artist} style={{height:"3.5vh", width:"3.5vh"}}/>} 
                                onClick={(event) =>{
                                    event.target.style.background="#B93F2F";
                                }} style={{
                                    fontSize:"1.3vw",
                                    fontWeight:"bolder",
                                    position:"relative ",
                                    textAlign:"left",
                                    width:"100%",
                                    top:"1%",
                                }}>
                                    Artists
                                </Btn>

                                <Btn variant="text" startIcon={<Avatar src={m_Tracks} style={{height:"3.5vh", width:"3.5vh"}}/>} 
                                onClick={(event) =>{
                                    event.target.style.background="#B93F2F";
                                }} style={{
                                    fontSize:"1.3vw",
                                    fontWeight:"bolder",
                                    position:"relative ",
                                    borderRadius:"10",
                                    width:"100%",
                                    top:"1%",
                                }}>
                                    Tracks
                                </Btn>

                                <Btn variant="text" startIcon={<Avatar src={m_Genres} style={{height:"3.5vh", width:"3.5vh"}}/>} 
                                onClick={(event) =>{
                                    event.target.style.background="#B93F2F";
                                }} style={{
                                    fontSize:"1.3vw",
                                    fontWeight:"bolder",
                                    position:"relative ",
                                    borderRadius:"10",
                                    width:"100%",
                                    top:"1%",
                                }}>
                                    Genres
                                </Btn>

                                <Btn variant="text" startIcon={<Avatar src={m_Playlist} style={{height:"3.5vh", width:"3.5vh"}}/>} 
                                onClick={(event) =>{
                                    event.target.style.background="#B93F2F";
                                }} style={{
                                    fontSize:"1.3vw",
                                    fontWeight:"bolder",
                                    position:"relative ",
                                    borderRadius:"10",
                                    width:"100%",
                                    top:"1%",
                                }}>
                                    Playlists
                                </Btn>

                                <Btn variant="text" startIcon={<Avatar src={m_Queue} style={{height:"3.5vh", width:"3.5vh"}}/>} 
                                onClick={(event) =>{
                                    event.target.style.background="#B93F2F";
                                }} style={{
                                    fontSize:"1.3vw",
                                    fontWeight:"bolder",
                                    position:"relative ",
                                    borderRadius:"10",
                                    width:"100%",
                                    top:"1%",
                                }}>
                                    Playing Queue
                                </Btn>
                            </div>
                            <div className="navLinks2">
 
                                    <Btn variant="text" startIcon={<Avatar src={logo_red} style={{height:"3.5vh", width:"3.5vh"}}/>} 
                                        onClick={(event, event2 ) =>{
                                            event.target.style.background="#B93F2F";
                                            event2.target.Avatar.src = {logo_white};
                                        }} style={{
                                            fontSize:"1.3vw",
                                            fontWeight:"bolder",
                                            position:"relative ",
                                            borderRadius:"10",
                                            width:"100%",
                                            top:"1%",
                                        }}>
                                            Subscription
                                        </Btn>

                                        <Btn variant="text" startIcon={<Avatar src={m_Settings} style={{height:"3.5vh", width:"3.5vh"}}/>} 
                                        onClick={(event) =>{
                                            event.target.style.background="#B93F2F";
                                        }} style={{
                                            fontSize:"1.3vw",
                                            fontWeight:"bolder",
                                            position:"relative ",
                                            borderRadius:"10",
                                            width:"100%",
                                            top:"1%",
                                        }}>
                                            Settings
                                        </Btn>

                                        <Btn variant="text" startIcon={<Avatar src={m_Help} style={{height:"3.5vh", width:"3.5vh"}}/>} 
                                        onClick={(event) =>{
                                            event.target.style.background="#B93F2F";
                                        }} style={{
                                            fontSize:"1.3vw",
                                            fontWeight:"bolder",
                                            position:"relative ",
                                            borderRadius:"10",
                                            width:"100%",
                                            top:"1%",
                                        }}>
                                            Help
                                        </Btn>
                                 
                            </div>
                            <div className="_footer">
                                        <Typography style={{color:"#C4C4C4",
                                                            fontFamily:"Ubuntu",
                                                            fontWeight:"600",
                                                            letterSpacing:"0.03em",
                                                            fontSize:"1.8vh"}}>
                                            &copy;MusicOlogy 2020 |All Rights Reserved
                                        </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid className="contentCarrier">
                    <div className="statusBar">
                        
                    </div>
                    <div className="contentInner">
                        
                    </div>
                </Grid>
                
           </div>
       </div>
    );
}
export default Home;