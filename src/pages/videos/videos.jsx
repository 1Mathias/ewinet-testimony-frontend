import { Container } from '@material-ui/core';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Video from '../../components/video/video';

import './videos.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const PF = "http://localhost:5000/images/";

export default function videos() {
  return (
    <>
    <div className='header'>
      <div>
          <img className="headerImg" src="https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510_960_720.jpg" alt="logo" />
        </div>
    </div>
    <h1 className="text-center m-5 text-secondary">Testemonial Videos</h1>
    <Container>
      <h4 className="text-secondary">Orthodox</h4>
      <Carousel responsive={responsive} centerMode={true} swipeable={true} draggable={true} infinite={true} keyBoardControl={true} renderDotsOutside={true}>
        <Video src="https://www.youtube.com/embed/w-KF26jebQI" url={PF+`ortho1.png`} />
        <Video src="https://www.youtube.com/embed/M6eKSuFYWF4" url={PF+`ortho2.png`}  />
        <Video src="https://www.youtube.com/embed/VmN1p2HZBK8" url={PF+`ortho3.png`}  />
        <Video src="https://www.youtube.com/embed/BBGfku6G5Fw" url={PF+`ortho4.png`}  />
      </Carousel>
      <hr />
      <h4 className="text-secondary">Islam</h4>
      <Carousel responsive={responsive} centerMode={true} swipeable={true} draggable={true} infinite={true} keyBoardControl={true} renderDotsOutside={true}>
        <Video src="https://www.youtube.com/embed/O5I9l2ZHFvU" url={PF+`islam1.png`}  />
        <Video src="https://www.youtube.com/embed/IIReNZuPM6M" url={PF+`islam2.png`}  />
        <Video src="https://www.youtube.com/embed/GDn2SSpEL-Y" url={PF+`islam3.png`}  />
        <Video src="https://www.youtube.com/embed/uj8pK7VfBto" url={PF+`islam4.png`}  />
      </Carousel>
      <hr />
      <h4 className="text-secondary">Adventist</h4>
      <Carousel responsive={responsive} centerMode={true} swipeable={true} draggable={true} infinite={true} keyBoardControl={true} renderDotsOutside={true}>
        <Video src="https://www.youtube.com/embed/3N6PkhmIQ-o" url={PF+`ad1.png`}  />
        <Video src="https://www.youtube.com/embed/Y-2LaCPST9o" url={PF+`ortho1.png`}  />
        <Video src="https://www.youtube.com/embed/Y4pto3M2750" url={PF+`islam1.png`}  />
        <Video src="https://www.youtube.com/embed/Y4pto3M2750" url={PF+`ortho2.png`}  />
      </Carousel>
    </Container>
    </>
  )
}
