import React from 'react'
import { makeStyles, Grid, Typography,Button, Card, CardActions, CardContent } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root:{
        position:'relative',
        width:'90%',
        left:"5%",
        height:'78vh !important',
        color:'white',
        background:'#06142B',
        borderRadius:'20px',
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
            display:"inline"
        },
        '& .btnGroup':{
            position:"relative",
            width:"100%",
            height:"20%",
            textAlign:"center",
            display:'inline-grid'
        },
        '& .textGroup':{
            position:"relative",
            width:"100%",
            height:"75%",
            textAlign:"center",
            padding:'0',
            background:'linear-gradient(180deg, #06092A 0%, #06092A 20%, #FFFFFF 20%);'
        },
        '& .titleHead':{
            position:'relative',
            width:'100%',
            height:'25%',
            fontFamily:'Ubuntu Bold'
        },
        '& .Price':{
            fontFamily:'Ubuntu Bold',
            fontSize:'3vw',
            color:'#06092A',
            textAlign:'center'
        },
        '& .timePeriod':{
            fontFamily:'Ubuntu Bold',
            color:'grey',
            textAlign:'center'
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
                                    <Typography style={{position:'relative',height:'80%', top:'10%',fontFamily:'Ubuntu Bold',fontSize:'2vw',color:'white'}}>
                                        Basic
                                    </Typography>
                                </Grid>
                                <Grid className="textContent">
                                    <Grid style={{position:'relative', padding:'0',height:'30%', width:'100%'}}>
                                        <Typography className="Price">
                                            $0.00
                                        </Typography>
                                        <Typography className="timePeriod">
                                            /Month
                                        </Typography>
                                    </Grid>

                                    <Grid style={{position:'relative', padding:'0',height:'70%', width:'100%'}}>

                                    </Grid>

                                </Grid>
                            </CardContent>
                            <CardActions className="btnGroup">

                                <Grid style={{paddingBottom:'0',position:'relative', paddingTop:'3.5vh'}}>
                                    <Button variant="contained" style={{position:'relative',background:'#504E4E', fontSize:'1vw',borderRadius:'1%',color:'white',fontFamily:'Ubuntu Bold'}} >
                                             Try It now
                                    </Button>
                                </Grid>
                                <Grid style={{paddingBottom:'0'}}>
                                    <Button style={{color:'#070D4D', fontFamily:'Ubuntu Bold'}}>
                                        More Info
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>

                        <Card className="card Two">
                        <CardContent className="textGroup">
                                <Grid className="titleHead">
                                    <Typography style={{position:'relative',height:'80%', top:'10%',fontFamily:'Ubuntu Bold',fontSize:'2vw',color:'white'}}>
                                        Standard
                                    </Typography>
                                </Grid>
                                <Grid className="textContent">
                                    <Grid style={{position:'relative', padding:'0',height:'30%', width:'100%'}}>
                                        <Typography className="Price">
                                            $5.50
                                        </Typography>
                                        <Typography className="timePeriod">
                                            /Month
                                        </Typography>
                                    </Grid>

                                    <Grid style={{position:'relative', padding:'0',height:'70%', width:'100%'}}>

                                    </Grid>

                                </Grid>
                            </CardContent>
                            <CardActions className="btnGroup">
                                <Typography style={{fontFamily:'Ubuntu Bold'}}>
                                   1 Month Free
                                </Typography>
                                <Grid style={{paddingBottom:'0'}}>
                                    <Button variant="contained" style={{position:'relative',background:'#B93F2F', fontSize:'1vw',borderRadius:'1%',color:'white',fontFamily:'Ubuntu Bold'}}  >
                                        Try It now
                                    </Button>
                                </Grid>
                                <Grid style={{paddingBottom:'0'}}>
                                    <Button style={{color:'#070D4D', fontFamily:'Ubuntu Bold'}}>
                                        More Info
                                    </Button>
                                </Grid>
                            </CardActions>
                        </Card>

                        <Card className="card Three">
                        <CardContent className="textGroup">
                                <Grid className="titleHead">
                                    <Typography style={{position:'relative',height:'80%', top:'10%',fontFamily:'Ubuntu Bold',fontSize:'2vw',color:'white'}}>
                                        Premium
                                    </Typography>
                                </Grid>
                                <Grid className="textContent">
                                    <Grid style={{position:'relative', padding:'0',height:'30%', width:'100%'}}>
                                        <Typography className="Price">
                                            $9.99
                                        </Typography>
                                        <Typography className="timePeriod">
                                            /Month
                                        </Typography>
                                    </Grid>

                                    <Grid style={{position:'relative', padding:'0',height:'70%', width:'100%'}}>

                                    </Grid>

                                </Grid>
                            </CardContent>
                            <CardActions className="btnGroup">
                               <Typography style={{fontFamily:'Ubuntu Bold', }}>
                                   1 Month Free
                               </Typography>
                               <Grid style={{paddingBottom:'0'}}>
                                    <Button variant="contained" style={{position:'relative',background:'#504E4E', fontSize:'1vw',borderRadius:'1%', color:'white',fontFamily:'Ubuntu Bold'}} >
                                            Try It now
                                    </Button>
                               </Grid>
                               <Grid style={{paddingBottom:'0'}}>
                                    <Button style={{color:'#070D4D', fontFamily:'Ubuntu Bold'}}>
                                            More Info
                                    </Button>
                               </Grid>

                            </CardActions>
                        </Card>
                 </Grid>
            </Grid>
        </div>
    )
};

export default SlideThree;