import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {id}=useParams()
    return (
        <div>
            details:{id}
        </div>
    );
};

ServiceDetails.propTypes = {
    
};

export default ServiceDetails;