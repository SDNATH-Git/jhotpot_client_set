import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../assets/banner/banner1.png';
import bannerImg2 from '../assets/banner/banner2.png';
import bannerImg3 from '../assets/banner/banner3.png';
import bannerImg4 from '../assets/banner/banner4.png';
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div className="my-5">
            <div className="rounded-2xl overflow-hidden h-[200px] md:h-[300px] lg:h-[500px]">
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={false}
                >
                    <div>
                        <img src={bannerImg1} className="w-full h-[200px] md:h-[300px] lg:h-[500px] object-cover" />
                    </div>
                    <div>
                        <img src={bannerImg2} className="w-full h-[200px] md:h-[300px] lg:h-[500px] object-cover" />
                    </div>
                    <div>
                        <img src={bannerImg3} className="w-full h-[200px] md:h-[300px] lg:h-[500px] object-cover" />
                    </div>
                    <div>
                        <img src={bannerImg4} className="w-full h-[200px] md:h-[300px] lg:h-[500px] object-cover" />
                    </div>
                </Carousel>
            </div>
        </div>

    );
};

export default Banner;