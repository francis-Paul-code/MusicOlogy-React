import React from 'react';
import { makeStyles , Grid} from '@material-ui/core';
import SlideTwo from './Slides/slideTwo';
import SlideOne from './Slides/slideOne';
import SlideThree from './Slides/slideThree';
import {Carousel} from 'react-bootstrap';
import Slide1 from '../../Images/Frame 1.png';
import Slide2 from '../../Images/Mobile Player.png';
import Slide3 from '../../Images/Desktop Player.png';
import 'bootstrap/dist/css/bootstrap.min.css';


const useStyles = makeStyles(() => ({
    root:{
      position:'relative',
      width:'100%',
      height:'100%',
      '& .carouselInner':{
             position:'relative',
             height:'100%',
             width:'100%',
      },
      '& .sr-only':{
        display:'none'
      }
    }
}));



const CarouselSlide = () => {

  const classes = useStyles();

  return (
    <div className={classes.root} >
        <div className="carouselInner" >
        <Carousel>
        <Carousel.Item >
          <div >
             {<SlideOne className="d-block w-100" alt="First Slide" />}
          </div>
            
        </Carousel.Item>
        <Carousel.Item>
          <div >
             {<SlideTwo className="d-block w-100" alt=" Slide" />}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div >
             {<SlideThree className="d-block w-100" alt="First Slide" />}
          </div>
        </Carousel.Item>

      </Carousel>
        </div>
    </div>
  )
}

export default CarouselSlide;

