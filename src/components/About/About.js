import React from 'react';
import about2 from '../../images/about-2.jpg';
import doctor1 from '../../images/doctor-5.jpg'
import doctor2 from '../../images/doctor-3.jpg'

const About = () => {
    return (
        <div className="container my-5">
            <h3 className="text-center">About</h3>
            <div className="row my-5">
                <div className="col-lg-6">
                    <img src={about2} alt="" />
                </div>
                <div className="col-lg-6">
                    <h5>Your Health is Our Priority</h5>
                    <p>Aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.</p>
                </div>
            </div>
            <div className="row my-5">
                <div className="col-lg-8">
                    <h3>Why buy it?</h3>
                    <hr />
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={doctor1} alt="" />
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                        <div className="col-lg-8 p-5">
                            <ul>
                                <li>Optimised for speed. Unique featured slider for pages, blog and portfolio post</li>
                                <li>Drag and Drop Builder</li>
                                <li>WooCommerce Shop</li>
                                <li>980, 1200 or 1360 max resolutions</li>
                                <li>Unique featured slider for pages, blog and portfolio post</li>
                                <li>WooCommerce Shop</li>
                                <li>980, 1200 or 1360 max resolutions</li>
                                <li>Unique featured slider for pages, blog and portfolio post</li>
                                <li>Drag & Drop Builder</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3>Meet Our Doctors</h3>
                    <hr />
                    <img src={doctor2} alt="" />
                    <h6>Dr. Rodney Stratton</h6>
                    <li className="text-info">36 years experience</li>
                    <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat…</p>
                </div>
            </div>
        </div>
    );
};

export default About;