import React from 'react';
import error from '../../images/error.png';
import './Error.css'

const Error = () => {
    return (
        <div className="error-img">
            <img src={error} alt="" />
        </div>
    );
};

export default Error;