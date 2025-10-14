import React from 'react';
import Banner from '../Home_components/Banner';
import Services from '../Home_components/Services/Services';
import ClientLogosMarquee from '../Home_components/ClientLogosMarquee';
import Benefits from '../Home_components/Benefit/Benefits';


const Home = () => {
    return (
        <div className='px-5 md:px-10 bg-[#F7F7F7]'>
            <Banner></Banner>
            <Services></Services>
            <ClientLogosMarquee></ClientLogosMarquee>
            <Benefits></Benefits>
        </div>
    );
};

export default Home;