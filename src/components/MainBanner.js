import './mainBanner.css';

import Carousel from 'react-bootstrap/Carousel';
import { useQuery } from '@tanstack/react-query';
import { fetchslideshows } from '../util/http';
import ExampleCarouselImage from '../images/banner-01.jpg';


const MainBanner = () => {
    const {data ,isLoading} = useQuery({
        queryKey:['slideshows'],
        queryFn:fetchslideshows,
        staleTime:5000

    });
//  console.log(data);
  
    return(

      <Carousel >



       {data?.map((item) => (
        <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={`data:image/jpeg;base64,${item.image}`} />
<Carousel.Caption>
<div class="header-text">
          <span class="category">{item.city}, <em>{item.country}</em></span>
          <h2>{item.caption}</h2>
        </div>
</Carousel.Caption>

      </Carousel.Item>
      ))}



    </Carousel>

    )


}

export default MainBanner;

{/* <div class="item item-1">
<div class="header-text">
  <span class="category">Toronto, <em>Canada</em></span>
  <h2>Hurry!<br />Get the Best Villa for you</h2>
</div>
</div> */}