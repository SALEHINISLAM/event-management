import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-tailwind/react';
import Services from '../Services/Services';

const Home = props => {
    return (
        <div className='text-black'>
            home
            <Services num={3}/>
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