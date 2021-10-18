import React from 'react';
import './Service.css'

const Service = (props) => {
    const {name, description, img} = props.service;
    return (
        <div>
            <div className="col service-card">
                <div className="card h-100">
                <img src={img}  alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <div className="p-3 text-center">
                <button className="btn btn-primary w-50">More</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Service;