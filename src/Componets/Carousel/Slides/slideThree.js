import React from 'react'
import { makeStyles, Grid, Typography,Button, Card, CardActions, CardContent } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root:{
        position:'relative',
        width:'100%',
        height:'100%',
        color:'white',
        background: 'linear-gradient(178.54deg, rgba(0, 22, 222, 0.01) 6.88%, rgba(0, 22, 222, 0.008) 93.47%), linear-gradient(252.46deg, rgba(180, 58, 58, 0.02) 16.02%, rgba(180, 58, 58, 0.016) 92.55%), linear-gradient(117.22deg, rgba(255, 255, 255, 0.025) 18.38%, rgba(255, 255, 255, 0.04) 83.36%)',
        boxShadow: 'inset 0px 3.67583px 17.4602px rgba(255, 255, 255, 0.25)',
        backdropFilter: 'blur(22.9739px)',
        borderRadius:'36px',
        '& .slideThree':{
            position:'relative',
            width:'100%',
            height:'78vh',
        },
        '& .cardHolder':{
            position:'relative',
            width:'100%',
            height:'100%',
            justifyContent:'space-evenly',
            display:'flex'
        },
        '& .card':{
            position:'relative',
            width:'25%',
            height:'86%',
            top:'7%',
            borderRadius:'2%',
            background:'white',
            display:"block"
        },
        '& .btnGroup':{
            position:"relative",
            width:"100%",
            height:"30%",
            textAlign:"center",
            display:'block'
        },
        '& .textGroup':{
            position:"relative",
            width:"100%",
            height:"70%",
            textAlign:"center",
            padding:'0',
            background:'linear-gradient(180deg, #06092A 0%, #06092A 20%, #FFFFFF 20%);'
        },
        '& .titleHead':{
            position:'relative',
            width:'100%',
            height:'20%',
            fontFamily:'Ubuntu Bold'
        }
    }
}));
const SlideThree = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid className="slideThree">
                 <Grid className="cardHolder">
                        <Card className="card One">
                            <CardContent className="textGroup">
                                <Grid className="titleHead">
                                    <Typography style={{fontFamily:'Ubuntu Bold',fontSize:'1.4vw',color:'white', padding:'5px'}}>
                                        Basic
                                    </Typography>
                                </Grid>
                                <Grid className="textContent">
                                    
                                </Grid>
                            </CardContent>
                            <CardActions className="btnGroup">
                                <Button variant="contained" style={{position:'relative',background:'#504E4E', fontSize:'1vw',borderRadius:'1%'}} >
                                    Try It now
                                </Button>
                                <Button style={{color:'#070D4D', fontFamily:'Ubuntu'}}>
                                    More Info
                                </Button>

                            </CardActions>
                        </Card>

                        <Card className="card Two">
                        <CardContent className="textGroup">
                                <Grid className="titleHead">
                                    <Typography style={{fontFamily:'Ubuntu Bold',fontSize:'1.4vw',color:'white', padding:'5px'}}>
                                        Standard
                                    </Typography>
                                </Grid>
                                <Grid className="textContent">
                                    
                                </Grid>
                            </CardContent>
                            <CardActions className="btnGroup">
                                <Typography style={{fonFamily:'Ubuntu'}}>
                                   1 Month Free
                                </Typography>
                                <Button variant="contained" style={{position:'relative',background:'#B93F2F', fontSize:'1vw',borderRadius:'1%'}}  >
                                    Try It now
                                </Button>
                                <Button style={{color:'#070D4D', fontFamily:'Ubuntu'}}>
                                    More Info
                                </Button>

                            </CardActions>
                        </Card>

                        <Card className="card Three">
                        <CardContent className="textGroup">
                                <Grid className="titleHead">
                                    <Typography style={{fontFamily:'Ubuntu Bold',fontSize:'1.4vw',color:'white', padding:'5px'}}>
                                        Premium
                                    </Typography>
                                </Grid>
                                <Grid className="textContent">
                                    
                                </Grid>
                            </CardContent>
                            <CardActions className="btnGroup">
                               <Typography style={{fonFamily:'Ubuntu'}}>
                                   1 Month Free
                               </Typography>
                                <Button variant="contained" style={{position:'relative',background:'#504E4E', fontSize:'1vw',borderRadius:'1%'}} >
                                    Try It now
                                </Button>
                                <Button style={{color:'#070D4D', fontFamily:'Ubuntu'}}>
                                    More Info
                                </Button>

                            </CardActions>
                        </Card>
                 </Grid>
            </Grid>
        </div>
    )
};

export default SlideThree;