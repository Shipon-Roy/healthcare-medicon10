import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid text-white bg-dark">
            <div className="row">
                <div className="col-lg-4">
                    <h1 className="py-5">MEDICON</h1>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                    <h6 className="py-3">Services</h6>
                    <div className="col-lg-6">
                    <ul>
                        <li>Primary Care</li>
                        <li>Sport Medicine</li>
                        <li>Emergence Medicine</li>
                    </ul>
                    </div>
                    <div className="col-lg-6">
                    <ul>
                        <li>Cardology</li>
                        <li>Genaerl Surgury</li>
                        <li>Infectuas Discase</li>
                    </ul>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h6 className="py-3">Social</h6>
                    <li>Facebook</li>
                    <li>YouTube</li>
                    <li>Twitter</li>
                </div>
            </div>
        </div>
    );
};

export default Footer;