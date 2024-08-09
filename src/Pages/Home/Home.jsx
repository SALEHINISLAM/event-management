import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';
import Services from '../Services/Services';
import Banner from '../../SharedComponents/Banner/Banner';
import Aos from 'aos';
import 'aos/dist/aos.css'
const Home = props => {
    useEffect(()=>{
        Aos.init()
    },[])
    return (
        <div className='text-black'>
            <div data-aos='zoom-in-up' data-aos-duration='1200'>
            <Banner/>
            </div>
            <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-center">
            <Services num={3}/>
            </div>
            
            <div className="">
                <Button>
                    samia
                </Button>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;