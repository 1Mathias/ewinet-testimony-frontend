import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './header.css';


export default function Header() {
  return (
    <div className='header'>
      <Carousel autoPlay infiniteLoop showThumbs={false} showIndicators={false} showArrows={false} showStatus={false}>
        <div>
          <img className="headerImg" src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="logo" />
        </div>
        <div>
          <img className="headerImg" src="https://cdn.pixabay.com/photo/2016/11/21/16/09/bible-1846174_960_720.jpg" alt="logo" />
        </div>
        <div>
          <img className="headerImg" src="https://cdn.pixabay.com/photo/2017/08/22/00/38/meadow-2667461_960_720.jpg" alt="logo" />
        </div>
      </Carousel>
    </div>
  );
}
