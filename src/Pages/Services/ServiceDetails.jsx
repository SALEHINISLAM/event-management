import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id}=useParams()
    const services=useLoaderData();
    const service=services.events[parseInt(id)];
    const {title, img, short_description, details, price}=service;
    return (
        <div>
            <h3 className='text-xl font-semibold p-2 pt-16 pb-6'>
                Service Details
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-center items-center">
            <img src={img} alt={title} className='rounded-3xl p-3'/>
            <div className="grid grid-cols-1 gap-4 p-3">
            <h1 className='text-3xl font-extrabold'>
                {
                    title
                }
            </h1>
            <p>
                {
                    short_description
                }
            </p>
            <h3 className='text-xl font-semibold'>
                Details:
            </h3>
            <ul className='list-disc pl-4'>
                {
                    details.map((detail,index)=> <li key={index}>{detail}</li> )
                }
            </ul>
            <h2 className='text-2xl font-semibold'>
                Price : <span>
                    {
                        price
                    }
                </span>
            </h2>
            </div>
            </div>
        </div>
    );
};

ServiceDetails.propTypes = {
    
};

export default ServiceDetails;