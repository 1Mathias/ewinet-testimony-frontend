import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import LeftArrowIcon from '../../image/left-arrow.png';
import RightArrowIcon from '../../image/right-arrow.png';



const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow" >
      <img src={LeftArrowIcon} alt="right-arrow"  />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow grow">
      <img src={RightArrowIcon} alt="right-arrow"  />
    </Typography>
  );
};
const HorizontalScrollBar=()=>{
    return(
        <><ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        <Box
         
          m="0 40px"
        >
            
          {/* <img src={Image} width="400" height='400' alt="pic" /> */}
         <iframe className="grow" width="300" height="300" src="https://www.youtube.com/embed/5DQxjwgRSEI" title="Best testimony - Powerful Testimony, Short Christian Testimony - Max Kolenda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
         <Box
         
          m="0 40px"
        >
            
          {/* <img src={Image} width="400" height='400' alt="pic" /> */}
         <iframe width="300" height="300" src="https://www.youtube.com/embed/5DQxjwgRSEI" title="Best testimony - Powerful Testimony, Short Christian Testimony - Max Kolenda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
         <Box
         
          m="0 40px"
        >
            
          {/* <img src={Image} width="400" height='400' alt="pic" /> */}
         <iframe width="300" height="300" src="https://www.youtube.com/embed/5DQxjwgRSEI" title="Best testimony - Powerful Testimony, Short Christian Testimony - Max Kolenda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
         <Box
         
          m="0 40px"
        >
            
          {/* <img src={Image} width="400" height='400' alt="pic" /> */}
         <iframe width="300" height="300" src="https://www.youtube.com/embed/5DQxjwgRSEI" title="Best testimony - Powerful Testimony, Short Christian Testimony - Max Kolenda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
         <Box
         
          m="0 40px"
        >
            
          {/* <img src={Image} width="400" height='400' alt="pic" /> */}
         <iframe width="300" height="300" src="https://www.youtube.com/embed/5DQxjwgRSEI" title="Best testimony - Powerful Testimony, Short Christian Testimony - Max Kolenda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
         <Box
         
          m="0 40px"
        >
            
          {/* <img src={Image} width="400" height='400' alt="pic" /> */}
         <iframe width="300" height="300" src="https://www.youtube.com/embed/5DQxjwgRSEI" title="Best testimony - Powerful Testimony, Short Christian Testimony - Max Kolenda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
         <Box
         
          m="0 40px"
        >
            
          {/* <img src={Image} width="400" height='400' alt="pic" /> */}
         <iframe width="300" height="300" src="https://www.youtube.com/embed/5DQxjwgRSEI" title="Best testimony - Powerful Testimony, Short Christian Testimony - Max Kolenda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
         <Box
         
          m="0 40px"
        >
            
          {/* <img src={Image} width="400" height='400' alt="pic" /> */}
         <iframe width="300" height="300" src="https://www.youtube.com/embed/5DQxjwgRSEI" title="Best testimony - Powerful Testimony, Short Christian Testimony - Max Kolenda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
      
    </ScrollMenu></>
    )
}

export default HorizontalScrollBar;