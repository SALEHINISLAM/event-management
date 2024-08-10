import React from 'react';
import PropTypes from 'prop-types';

const Contact = props => {
    return (
        <div className='text-black min-h-svh p-2  w-full'>
            
            <iframe src="https://lottie.host/embed/6491bd33-13d7-48d6-b4f9-c5ac5dcd2e1a/tQoMRDQTqM.json" className='w-full h-full' width={'100%'} height={'100%'} allowFullScreen></iframe>

            <div className="">
                <div className="">
                <h1 className='text-5xl font-bold text-center pt-20'>
                Contact Us
            </h1>
            <p className='text-center pt-12'>
                We will be happy to hear from you.
            </p>
            <h3 className='text-3xl text-center pt-16'>
                Email: example@eduvenue.com
            </h3>
                </div>
            </div>

        </div>
    );
};

Contact.propTypes = {
    
};

export default Contact;