//
import React from 'react';
import { motion } from 'framer-motion';
import Banner from '../Home_components/Banner';
import Services from '../Home_components/Services/Services';
import ClientLogosMarquee from '../Home_components/ClientLogosMarquee';
import Benefits from '../Home_components/Benefit/Benefits';
import BeMerchant from '../Home_components/BeMerchant';
import TestimonialSection from '../Home_components/TestimonialSection';

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
    return (

        <div className='px-5 md:px-10 bg-[#F7F7F7]'>

            {/* Banner Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Banner />
            </motion.div>

            {/* Services Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Services />
            </motion.div>

            {/* Client Logos Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <ClientLogosMarquee />
            </motion.div>

            {/* Benefits Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <Benefits />
            </motion.div>

            {/* Be a Merchant Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <BeMerchant />
            </motion.div>

            {/* Testimonials Section */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <TestimonialSection />
            </motion.div>
        </div>

    );
};

export default Home;
