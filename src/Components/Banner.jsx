import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className='h-100vh w-full'>
       <Carousel showArrows={false}
       showStatus={false}
       swipeable={true}
       showThumbs={false}>
                <div>
                    <img src="../bannerpics/ajiwan-bachat.jpg" />
                </div>
                <div>
                <img src="../bannerpics/locations.jpg" />
                </div>
                <div>
                <img src="../bannerpics/cover-photos.jpg" />
                </div>
                <div>
                <img src="../bannerpics/loan.jpg" />
                </div>
            </Carousel>
    </div>
  )
}

export default Banner
