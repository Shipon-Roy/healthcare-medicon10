import React from 'react';
import doctor1 from '../../images/doctor-1.jpg';
import doctor2 from '../../images/doctor-2.jpg';
import doctor3 from '../../images/doctor-3.jpg';
import doctor4 from '../../images/doctor-4.jpg';
import doctor5 from '../../images/doctor-5.jpg';
import doctor6 from '../../images/doctor-6.jpg';

const Doctors = () => {
    return (
            <div className="container my-5">
            <h3 className="text-center">Doctors</h3>
                <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                <div className="col">
                    <div className="card h-100">
                    <img src={doctor1} className="card-img-top h-75" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Androw smith</h5>
                        <p>Cardiology</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={doctor2} className="card-img-top h-75" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Robard ward</h5>
                        <p>Neurology</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={doctor3} className="card-img-top h-75" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Heny jo</h5>
                        <p>Rediology</p>
                    </div>
                    </div>
                </div>  
                <div className="col">
                    <div className="card h-100">
                    <img src={doctor4} className="card-img-top h-75" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Hinks</h5>
                        <p>Cardiology</p>
                    </div>
                    </div>
                </div>  
                <div className="col">
                    <div className="card h-100">
                    <img src={doctor5} className="card-img-top h-75" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Jossi</h5>
                        <p>Dental</p>
                    </div>
                    </div>
                </div>  
                <div className="col">
                    <div className="card h-100">
                    <img src={doctor6} className="card-img-top h-75" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Moi jo</h5>
                        <p>Pediatrics</p>
                    </div>
                    </div>
                </div>  
                </div>
            </div>
    );
};

export default Doctors;