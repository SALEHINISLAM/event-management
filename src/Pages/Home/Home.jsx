import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';
import Services from '../Services/Services';
import Banner from '../../SharedComponents/Banner/Banner';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Statistics from '../../SharedComponents/Statistics/Statistics';
import { Review } from '../../SharedComponents/Review/Review';
const Home = props => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='text-black'>
            <div data-aos='zoom-in-up' data-aos-duration='1200'>
            <Banner/>
            </div>
            <div data-aos="fade-up" data-aos-duration='1200'>
            <Services num={3}/>
            </div>
            
            <div data-aos="fade-right" data-aos-duration='1200'>
                <Statistics/>
            </div>
            <div data-aos="fade-left" data-aos-duration='1200'>
                <Review/>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;