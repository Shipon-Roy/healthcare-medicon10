import React from 'react';
import bannerimg from '../../images/banner1.jpg';
import aboutImg from '../../images/about-img.jpg';
import doctor1 from '../../images/doctor-1.jpg';
import doctor2 from '../../images/doctor-2.jpg';
import doctor3 from '../../images/doctor-3.jpg';
import './Home.css';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* banner section  */}
            <div className="card bg-dark text-white text-center banner-img">
                <img className="img-fluid " src={bannerimg} /* className="card-img" */ alt="..."/>
                <div className="card-img-overlay text-gary pt-5">
                    <h1 className="card-title">Your Health Care is <br /> Our Responsibility</h1>
                    <p className="card-text text-info pt-3">We Work to take care of your Health and Body</p>
                    <button className="btn btn-primary">Free Services</button>
                </div>
            </div>
            {/* banner section  */}
            {/* services section  */}
            <div className=" my-5">
                <Services></Services>
            </div>
            {/* services section  */}
            {/* about section  */}
            <div className="container p-5 my-5 shadow">
                <h3 className="text-center">About Us</h3>
                <p className="text-center">Your Life is our Spesiality. Our team of experienced phisycians offer a coperachers range of health care services.</p>
                <div className="my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <div>
                            <h5>Experted Doctors</h5>
                            <li>Our team of physicians treads patiants of all eges fro ifants to seinior</li>
                        </div>
                        <div className="my-5">
                            <h5>Healthy Environment</h5>
                            <li>we have experienced nursing team and good beds for helthy environment</li>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
                </div>
            </div>
            {/* about section  */}
            {/* patients sectioon */}
            <div className="container">
                <h3 className="text-center">Patients Say</h3>
                <div className="row my-5 g-4">
                    <div className="col-lg-6 p-5 shadow">
                        <p>A great benifit of parkside is its peacefull location and the impecealbe medical and nursing servise</p>
                        <h6 className="text-primary">Riyan</h6>
                    </div>
                    <div className="col-lg-6 p-5 shadow">
                        <p>My treatment was secound to none and all the staft at clarment were efficient polite and caring</p>
                        <h6 className="text-primary">Smith</h6>
                    </div>
                </div>
            </div>
            {/* patients sectioon */}
            {/* doctor section  */}
            <div className="container my-5">
                <h3 className="text-center">Our Doctor</h3>
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
                    <img src={doctor2} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Robard ward</h5>
                        <p>Neurology</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                    <img src={doctor3} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Heny jo</h5>
                        <p>Rediology</p>
                    </div>
                    </div>
                </div>  
                </div>
            </div>
            {/* doctor section  */}
            {/* contact section  */}
            <div className="container my-5">
                <div className="row">
                <div className="col-lg-6">
                    <h5>Free Medical Consultation</h5>
                    <p>we privide a free free medical consultation for our patients once subimt your the request our office will contact you within one bissness day to schedule your apoitment</p>
                    <ul>
                        <li>Explain your health concerns</li>
                        <li>A specialist will answer your question</li>
                        <li>Review your case documents</li>
                        <li>Follow up your medical condition</li>
                        <li>Check your surgary result</li>
                    </ul>
                </div>
                <div className="col-lg-6 p-5 shadow">
                    <h5>Request a free Consultation</h5>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp"/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <p>Are you New and Existing patients?*</p>
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">New</label>
                            <div>
                            <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                            <label className="form-check-label" htmlFor="exampleCheck2">Existing</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                </div>
            </div>
            {/* contact section  */}
        </div>
    );
};

export default Home;